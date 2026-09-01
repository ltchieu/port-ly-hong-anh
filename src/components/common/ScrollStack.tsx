import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  style = {},
  onClick
}) => (
  <div
    onClick={onClick}
    className={`scroll-stack-card relative w-full my-4 sm:my-6 rounded-3xl shadow-xl box-border origin-top ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
      willChange: 'transform',
      ...style
    }}
  >
    {children}
  </div>
);

export interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 70,
  itemScale = 0.03,
  itemStackDistance = 24,
  stackPosition = '14%',
  scaleEndPosition = '6%',
  baseScale = 0.9,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef<Map<number, { translateY: number; scale: number; rotation: number; blur: number }>>(new Map());

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (start >= end) return scrollTop >= start ? 1 : 0;
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const updateCardTransforms = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !cardsRef.current.length) return;

    const isWindow = useWindowScroll;
    const scrollTop = isWindow
      ? (window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0)
      : scroller.scrollTop;

    const containerHeight = isWindow ? window.innerHeight : scroller.clientHeight;
    if (!containerHeight) return;

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const scrollerRect = scroller.getBoundingClientRect();
    const scrollerDocTop = isWindow ? (scrollerRect.top + scrollTop) : 0;

    const endElement = scroller.querySelector('.scroll-stack-end') as HTMLElement | null;
    const endElementTop = endElement
      ? (isWindow ? scrollerDocTop + endElement.offsetTop : endElement.offsetTop)
      : 0;

    const totalCards = cardsRef.current.length;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardHeight = card.offsetHeight || 300;
      const cardTop = isWindow ? (scrollerDocTop + card.offsetTop) : card.offsetTop;

      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart;

      const pinEnd = endElementTop
        ? Math.max(pinStart, endElementTop - cardHeight - containerHeight * 0.15 - itemStackDistance * (totalCards - 1 - i))
        : pinStart + 2000;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount > 0) {
        let topCardIndex = 0;
        for (let j = 0; j < totalCards; j++) {
          const jCard = cardsRef.current[j];
          if (!jCard) continue;
          const jCardTop = isWindow ? (scrollerDocTop + jCard.offsetTop) : jCard.offsetTop;
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }
        if (i < topCardIndex) {
          blur = Math.max(0, (topCardIndex - i) * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      const maxAllowedTranslate = endElementTop
        ? Math.max(0, endElementTop - cardTop - cardHeight - 20)
        : 99999;

      if (isPinned) {
        translateY = Math.min(scrollTop - cardTop + stackPositionPx + itemStackDistance * i, maxAllowedTranslate);
      } else if (scrollTop > pinEnd) {
        translateY = Math.min(pinEnd - cardTop + stackPositionPx + itemStackDistance * i, maxAllowedTranslate);
      }

      const newTransform = {
        translateY: Math.round(translateY * 10) / 10,
        scale: Math.max(0.1, Math.round(scale * 1000) / 1000),
        rotation: Math.round(rotation * 10) / 10,
        blur: Math.round(blur * 10) / 10
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transformStr = `translate3d(0px, ${newTransform.translateY}px, 0px) scale(${newTransform.scale})${newTransform.rotation !== 0 ? ` rotate(${newTransform.rotation}deg)` : ''}`;
        card.style.transform = transformStr;

        if (blurAmount > 0) {
          card.style.filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : 'none';
        }

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === totalCards - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    useWindowScroll,
    stackPosition,
    scaleEndPosition,
    itemStackDistance,
    baseScale,
    itemScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    parsePercentage,
    calculateProgress
  ]);

  const scheduleUpdate = useCallback(() => {
    if (rafIdRef.current !== null) return;
    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null;
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.zIndex = `${10 + i}`;
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      (card.style as any).WebkitBackfaceVisibility = 'hidden';
    });

    scheduleUpdate();

    if (useWindowScroll) {
      window.addEventListener('scroll', scheduleUpdate, { passive: true });
      window.addEventListener('resize', scheduleUpdate, { passive: true });
      window.addEventListener('orientationchange', scheduleUpdate, { passive: true });
    } else {
      scroller.addEventListener('scroll', scheduleUpdate, { passive: true });
      window.addEventListener('resize', scheduleUpdate, { passive: true });
    }

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (useWindowScroll) {
        window.removeEventListener('scroll', scheduleUpdate);
        window.removeEventListener('resize', scheduleUpdate);
        window.removeEventListener('orientationchange', scheduleUpdate);
      } else {
        scroller.removeEventListener('scroll', scheduleUpdate);
        window.removeEventListener('resize', scheduleUpdate);
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
    };
  }, [itemDistance, useWindowScroll, scheduleUpdate]);

  return (
    <div
      className={`relative w-full ${useWindowScroll ? 'overflow-visible' : 'h-full overflow-y-auto overflow-x-visible'} ${className}`.trim()}
      ref={scrollerRef}
      style={
        useWindowScroll
          ? {}
          : {
              overscrollBehavior: 'contain',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }
      }
    >
      <div
        className={`scroll-stack-inner relative ${
          useWindowScroll
            ? 'pt-4 pb-20 sm:pb-28 min-h-0'
            : 'pt-[15vh] px-4 sm:px-12 md:px-20 pb-16 min-h-screen'
        }`}
      >
        {children}
        <div className="scroll-stack-end w-full h-16 sm:h-24 lg:h-32 pointer-events-none" />
      </div>
    </div>
  );
};

export { ScrollStack };
export default ScrollStack;
