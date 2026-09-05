import React, { useRef, ReactNode, MouseEventHandler, CSSProperties, useState, useCallback } from 'react';
import './SpecularButton.css';

export interface SpecularButtonProps {
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'hologram';
  href?: string;
  target?: string;
  rel?: string;
  id?: string;
}

export default function SpecularButton({
  children = 'Get Started',
  size = 'lg',
  radius = 8,
  tint = '#0E4249',
  tintOpacity = 0.95,
  blur = 8,
  textColor = '#FFFFFF',
  lineColor = '#2DD4BF',
  baseColor = '#07262B',
  intensity = 1.2,
  autoAnimate = true,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  variant = 'default',
  href,
  target,
  rel,
  id
}: SpecularButtonProps) {
  const btnRef = useRef<HTMLElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, active: false });

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setMousePos({ x, y, active: true });
  }, []);

  const handlePointerLeave = useCallback(() => {
    setMousePos((prev) => ({ ...prev, active: false }));
  }, []);

  const buttonClasses = `specular-button specular-button--${size}${
    variant === 'hologram' ? ' specular-button--hologram' : ''
  }${autoAnimate ? ' specular-button--auto-animate' : ''}${
    mousePos.active ? ' specular-button--active-hover' : ''
  }${className ? ` ${className}` : ''}`;

  const customStyles = {
    '--sb-radius': `${radius}px`,
    '--sb-tint': tint,
    '--sb-tint-opacity': tintOpacity,
    '--sb-blur': `${blur}px`,
    '--sb-text-color': textColor,
    '--sb-line-color': lineColor,
    '--sb-base-color': baseColor,
    '--sb-intensity': intensity,
    '--mouse-x': `${mousePos.x}%`,
    '--mouse-y': `${mousePos.y}%`,
  } as CSSProperties;

  if (href) {
    return (
      <a
        id={id}
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={buttonClasses}
        style={customStyles}
      >
        <span className="specular-button__border-glow" aria-hidden="true" />
        <span className="specular-button__shimmer" aria-hidden="true" />
        <span className="specular-button__pointer-sheen" aria-hidden="true" />
        <span className="specular-button__label">{children}</span>
      </a>
    );
  }

  return (
    <button
      id={id}
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={buttonClasses}
      style={customStyles}
    >
      <span className="specular-button__border-glow" aria-hidden="true" />
      <span className="specular-button__shimmer" aria-hidden="true" />
      <span className="specular-button__pointer-sheen" aria-hidden="true" />
      <span className="specular-button__label">{children}</span>
    </button>
  );
}
