'use client';

import { useEffect } from 'react';

import gsap from 'gsap';

export const useMagnetic = ref => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = e => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      const textElement = element.querySelector('span');

      gsap.to(element, { x: x, duration: 0.3, ease: 'power2.out' });
      if (textElement) {
        gsap.to(textElement, {
          x: x * 0.5,
          y: y * 0.5,
          duration: 0.7,
          ease: 'power3.out',
        });
      }
    };

    const handleMouseLeave = () => {
      const textElement = element.querySelector('span');
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
      if (textElement) {
        gsap.to(textElement, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);
};
