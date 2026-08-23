import { motion, useMotionValue, useTransform, type PanInfo } from 'motion/react';
import { useState, useEffect, useMemo, useCallback, useRef, memo, ReactNode } from 'react';
import './Stack.css';

interface CardRotateProps {
  children: ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
}

const CardRotate = memo(function CardRotate({
  children,
  onSendToBack,
  sensitivity,
  disableDrag = false,
}: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [40, -40]);
  const rotateY = useTransform(x, [-100, 100], [-40, 40]);

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
        onSendToBack();
      } else {
        x.set(0);
        y.set(0);
      }
    },
    [onSendToBack, sensitivity, x, y]
  );

  if (disableDrag) {
    return (
      <div className="card-rotate-disabled" style={{ transform: 'none' }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className="card-rotate"
      style={{
        x,
        y,
        rotateX,
        rotateY,
        touchAction: 'pan-y',
      }}
      transformTemplate={({ x, y, rotateX, rotateY }) =>
        `translate3d(${x}, ${y}, 0px) rotateX(${rotateX}) rotateY(${rotateY})`
      }
      drag="x"
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.5}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
});

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cards?: ReactNode[];
  animationConfig?: { stiffness: number; damping: number };
  sendToBackOnClick?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  mobileClickOnly?: boolean;
  mobileBreakpoint?: number;
}

function Stack({
  randomRotation = false,
  sensitivity = 160,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = true,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = true,
  mobileBreakpoint = 768,
}: StackProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Stable card rotations stored once in ref to prevent flickering on parent re-renders/scrolls
  const rotationsMapRef = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = isMobile || (mobileClickOnly && isMobile);
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  const [stack, setStack] = useState(() => {
    if (cards.length) {
      return cards.map((content, index) => ({ id: index + 1, content }));
    }
    return [];
  });

  const prevCardsLengthRef = useRef(cards.length);
  useEffect(() => {
    // Only re-sync stack when card count actually changes, avoiding re-initialization on scroll
    if (cards.length && cards.length !== prevCardsLengthRef.current) {
      prevCardsLengthRef.current = cards.length;
      setStack(cards.map((content, index) => ({ id: index + 1, content })));
    }
  }, [cards.length]);

  // Generate stable rotation once per card ID
  const getCardRotation = useCallback(
    (cardId: number) => {
      if (!randomRotation) return 0;
      if (!rotationsMapRef.current.has(cardId)) {
        rotationsMapRef.current.set(cardId, Math.random() * 10 - 5);
      }
      return rotationsMapRef.current.get(cardId) ?? 0;
    },
    [randomRotation]
  );

  const sendToBack = useCallback((id: number) => {
    setStack((prev) => {
      const newStack = [...prev];
      const index = newStack.findIndex((card) => card.id === id);
      if (index === -1) return prev;
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  }, []);

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused, sendToBack]);

  const maxVisibleCards = 4;
  const visibleCards = useMemo(() => {
    const minIndex = Math.max(0, stack.length - maxVisibleCards);
    return stack.slice(minIndex);
  }, [stack]);

  if (!stack.length) return null;

  return (
    <div
      className="stack-container"
      style={{ touchAction: 'pan-y' }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {visibleCards.map((card) => {
        const index = stack.indexOf(card);
        const randomRotate = getCardRotation(card.id);
        const isTopCard = index === stack.length - 1;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag || !isTopCard}
          >
            <motion.div
              className="card"
              onClick={() => shouldEnableClick && isTopCard && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.05 - stack.length * 0.05,
                transformOrigin: '90% 90%',
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}

export default memo(Stack);
