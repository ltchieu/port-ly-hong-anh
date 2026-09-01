import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  index?: number;
  total?: number;
  progress?: MotionValue<number>;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  style = {},
  onClick,
  index = 0,
  total = 3,
  progress
}) => {
  const rangeStart = total > 1 ? index / total : 0;
  const rangeEnd = 1;
  const targetScale = 1 - (total - 1 - index) * 0.05;

  const dummyProgress = useTransform(() => 1);
  const activeProgress = progress || dummyProgress;

  const scale = useTransform(
    activeProgress,
    [rangeStart, rangeEnd],
    [1, Math.max(0.88, targetScale)]
  );

  return (
    <div
      className="scroll-stack-sticky-wrapper sticky w-full"
      style={{
        top: `calc(var(--stack-top-base, 72px) + ${index} * var(--stack-step, 20px))`,
        zIndex: 10 + index,
        marginBottom: index < total - 1 ? 'var(--stack-margin-bottom, 240px)' : '0px'
      }}
    >
      <motion.div
        onClick={onClick}
        style={{
          scale: index === total - 1 ? 1 : scale,
          transformOrigin: 'top center',
          ...style
        }}
        className={`scroll-stack-card relative w-full rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 box-border ${itemClassName}`.trim()}
      >
        {children}
      </motion.div>
    </div>
  );
};

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
  topOffsetMobile?: number;
  topOffsetDesktop?: number;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 240,
  itemStackDistance = 20,
  topOffsetMobile = 72,
  topOffsetDesktop = 96
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenArray = React.Children.toArray(children);
  const total = childrenArray.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-container relative w-full flex flex-col pb-16 sm:pb-28 ${className}`.trim()}
      style={{
        '--stack-top-base': `${topOffsetMobile}px`,
        '--stack-step': `${itemStackDistance}px`,
        '--stack-margin-bottom': `${itemDistance}px`
      } as React.CSSProperties}
    >
      <style>{`
        @media (min-width: 640px) {
          .scroll-stack-container {
            --stack-top-base: ${topOffsetDesktop}px;
            --stack-step: ${itemStackDistance + 6}px;
            --stack-margin-bottom: ${itemDistance + 100}px;
          }
        }
      `}</style>
      {childrenArray.map((child, idx) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            index: idx,
            total,
            progress: scrollYProgress,
            key: (child.key as string) || idx
          });
        }
        return child;
      })}
    </div>
  );
};

export { ScrollStack };
export default ScrollStack;
