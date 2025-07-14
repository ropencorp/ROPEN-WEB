'use client';

import { useRef } from 'react';

import { useMagnetic } from '../../../_hooks/use-magnetic';

export function MagneticButton({ children, className, ...props }) {
  const elementRef = useRef(null);
  useMagnetic(elementRef);

  return (
    <button
      ref={elementRef}
      className={`relative overflow-hidden rounded-full bg-[#2b2b2b] px-8 py-4 text-white ${className}`}
      {...props}
    >
      <span className='pointer-events-none relative block'>{children}</span>
    </button>
  );
}
