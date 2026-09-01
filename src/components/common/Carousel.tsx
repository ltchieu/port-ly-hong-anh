import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, type Transition } from 'motion/react';
import type { CarouselItemData, CarouselProps } from '../../models/carousel';
import './Carousel.css';

export type { CarouselItemData, CarouselProps };

const DEFAULT_ITEMS: CarouselItemData[] = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <i className="fa-solid fa-file-lines carousel-icon" />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <i className="fa-solid fa-circle carousel-icon" />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <i className="fa-solid fa-layer-group carousel-icon" />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <i className="fa-solid fa-table-cells-large carousel-icon" />
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <i className="fa-solid fa-code carousel-icon" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS: Transition = { type: 'spring', stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselItemData;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }: CarouselItemProps) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`carousel-item ${round ? 'round' : ''}`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '100%',
        rotateY: rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
    >
      <div className={`carousel-item-header ${round ? 'round' : ''}`}>
        <span className="carousel-icon-container">{item.icon}</span>
        {item.postNumber && (
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2DD4BF] bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
            {item.postNumber}
          </span>
        )}
      </div>
      <div className="carousel-item-content">
        <div>
          {item.tag && (
            <span className="font-narrow text-[10.5px] font-black text-[#2DD4BF] tracking-wider uppercase block mb-1">
              {item.tag}
            </span>
          )}
          <div className="carousel-item-title">{item.title}</div>
          <p className="carousel-item-description">{item.description}</p>

          {/* Metrics Pill / Badge Widget */}
          {item.metrics && item.metrics.length > 0 && (
            <div className="mt-3 p-2.5 sm:p-3 rounded-xl bg-[#071F24] border border-[#2DD4BF]/25 flex items-center justify-around text-center shadow-inner">
              {item.metrics.map((m, mIdx) => (
                <div key={mIdx} className="flex-1 px-1">
                  <div
                    className={`font-mono text-sm sm:text-base font-black tracking-tight leading-none ${
                      m.highlight ? 'text-[#2DD4BF]' : 'text-white'
                    }`}
                  >
                    {m.value}
                  </div>
                  <div className="font-narrow text-[9px] sm:text-[9.5px] font-black text-white/60 uppercase tracking-widest mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {item.link && (
          <div className="pt-3 mt-3 border-t border-white/10 w-full flex items-center justify-between">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1877F2] hover:bg-[#1565C0] text-white text-[11px] font-narrow font-bold uppercase tracking-wider rounded-lg transition-all shadow-xs hover:scale-105 cursor-pointer"
            >
              <i className="fa-brands fa-facebook-f text-[10px]"></i>
              <span>View Post</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[8px]"></i>
            </a>
            <span className="font-mono text-[10px] text-white/50">Facebook</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  className = '',
  style,
}: CarouselProps) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const target = -position * trackItemOffset;
    if (isJumping) {
      x.set(target);
      setIsJumping(false);
    }
  }, [position, trackItemOffset, isJumping, x]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    if (!loop) return;
    if (position === itemsForRender.length - 1) {
      setIsJumping(true);
      setPosition(1);
    } else if (position === 0) {
      setIsJumping(true);
      setPosition(itemsForRender.length - 2);
    }
  };

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setPosition(prev => Math.max(prev - 1, 0));
    }
  };

  const activeIndex = useMemo(() => {
    if (!loop) return position;
    if (position === 0) return items.length - 1;
    if (position === itemsForRender.length - 1) return 0;
    return position - 1;
  }, [position, loop, items.length, itemsForRender.length]);

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''} ${className}`}
      style={{
        width: `${baseWidth}px`,
        ...style
      }}
    >
      <motion.div
        className="carousel-track"
        drag="x"
        dragConstraints={{ left: -((itemsForRender.length - 1) * trackItemOffset), right: 0 }}
        style={{
          x,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`
        }}
        onDragStart={() => setIsAnimating(true)}
        onDragEnd={handleDragEnd}
        animate={{ x: -position * trackItemOffset }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div className={`carousel-indicators-container ${round ? 'round' : ''}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === activeIndex ? 'active' : 'inactive'}`}
              onClick={() => setPosition(loop ? index + 1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
