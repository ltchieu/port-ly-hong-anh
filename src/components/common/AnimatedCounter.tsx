import { useEffect, useState, useRef, memo } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: string | number;
  duration?: number; // duration in seconds
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const AnimatedCounter = memo(function AnimatedCounter({
  value,
  duration = 1.4,
  className = '',
  prefix: customPrefix,
  suffix: customSuffix,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // once: true ensures once the number is viewed, it animates and stays at target without resetting
  const isInView = useInView(ref, { once: true, amount: 'some' });
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    const valueStr = String(value).trim();

    // Regex pattern to separate: [optional leading prefix] [number with optional decimals/commas] [optional trailing text/suffix]
    // Example: "130,000+ Post Reach" -> prefix="", num="130,000", suffix="+ Post Reach"
    // Example: "+2,050" -> prefix="+", num="2,050", suffix=""
    // Example: "5.3K+" -> prefix="", num="5.3", suffix="K+"
    // Example: "20 / month" -> prefix="", num="20", suffix=" / month"
    const numberPattern = /^([^\d.]*)(\d{1,3}(?:,\d{3})*(?:\.\d+)?|\d+(?:\.\d+)?)(.*)$/;
    const match = valueStr.match(numberPattern);

    if (!match) {
      // Non-numeric string fallback
      setDisplayValue(valueStr);
      return;
    }

    const detectedPrefix = customPrefix ?? match[1];
    const rawNumberStr = match[2];
    const detectedSuffix = customSuffix ?? match[3];

    // Clean commas from number
    const cleanNumberStr = rawNumberStr.replace(/,/g, '').trim();
    const targetNumber = parseFloat(cleanNumberStr);

    if (isNaN(targetNumber)) {
      setDisplayValue(valueStr);
      return;
    }

    // If not in view yet, render 0 with prefix and suffix
    if (!isInView) {
      setDisplayValue(`${detectedPrefix}0${detectedSuffix}`);
      return;
    }

    const hasDecimals = cleanNumberStr.includes('.');
    const decimalPlaces = hasDecimals ? cleanNumberStr.split('.')[1].length : 0;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = (timestamp - startTimestamp) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = targetNumber * easeOut;

      let formattedNumber: string;
      if (hasDecimals) {
        formattedNumber = current.toFixed(decimalPlaces);
      } else {
        formattedNumber = Math.floor(current).toLocaleString('en-US');
      }

      setDisplayValue(`${detectedPrefix}${formattedNumber}${detectedSuffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        const finalFormatted = hasDecimals
          ? targetNumber.toFixed(decimalPlaces)
          : targetNumber.toLocaleString('en-US');
        setDisplayValue(`${detectedPrefix}${finalFormatted}${detectedSuffix}`);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, value, duration, customPrefix, customSuffix]);

  return (
    <span ref={ref} className={`inline-block tabular-nums transition-all ${className}`}>
      {displayValue}
    </span>
  );
});

export default AnimatedCounter;
