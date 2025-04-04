
import { useEffect, useRef, useState } from 'react';

// Intersection Observer hook for triggering animations on scroll
export const useElementOnScreen = (
  options: IntersectionObserverInit = { threshold: 0.3 }
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { containerRef, isVisible };
};

// Staggered animation for list items
export const useStaggeredAnimation = (totalItems: number, baseDelay = 0.1) => {
  return (index: number) => ({
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4,
      delay: baseDelay * index,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  });
};

// Helper function to determine animation class
export const getAnimationClass = (
  isVisible: boolean,
  animationType: 'fade-in' | 'slide-up' | 'slide-in-right' | 'scale-in' = 'fade-in'
) => {
  if (!isVisible) return 'opacity-0';
  
  switch (animationType) {
    case 'fade-in':
      return 'animate-fade-in';
    case 'slide-up':
      return 'animate-slide-up';
    case 'slide-in-right':
      return 'animate-slide-in-right';
    case 'scale-in':
      return 'animate-scale-in';
    default:
      return 'animate-fade-in';
  }
};
