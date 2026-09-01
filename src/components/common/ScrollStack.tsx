import React, { ReactNode } from 'react';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  index?: number;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  style = {},
  onClick,
  index = 0
}) => (
  <div
    onClick={onClick}
    className={`scroll-stack-card sticky w-full rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 box-border ${itemClassName}`.trim()}
    style={{
      top: `calc(var(--stack-top-base, 68px) + ${index} * var(--stack-step, 20px))`,
      zIndex: 10 + index,
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
  topOffsetMobile?: number;
  topOffsetDesktop?: number;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 40,
  itemStackDistance = 20,
  topOffsetMobile = 68,
  topOffsetDesktop = 90
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div
      className={`scroll-stack-container relative w-full flex flex-col pb-12 sm:pb-20 ${className}`.trim()}
      style={{
        '--stack-top-base': `${topOffsetMobile}px`,
        '--stack-step': `${itemStackDistance}px`,
        gap: `${itemDistance}px`
      } as React.CSSProperties}
    >
      <style>{`
        @media (min-width: 640px) {
          .scroll-stack-container {
            --stack-top-base: ${topOffsetDesktop}px;
            --stack-step: ${itemStackDistance + 6}px;
            gap: ${itemDistance + 24}px;
          }
        }
      `}</style>
      {childrenArray.map((child, idx) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            index: idx,
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
