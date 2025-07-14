'use client'; // Directiva necesaria para Next.js App Router

import { useRef } from 'react';

import { useMagnetic } from '@/_hooks'; // Importamos el hook desde la carpeta _hooks

// El @/ es un atajo que en Next.js apunta a la raíz del proyecto (donde está la carpeta app, components, etc.)

export function MagneticButton({ children, className, ...props }) {
  const elementRef = useRef(null);
  useMagnetic(elementRef); // Aplicamos el efecto magnético que ya existe

  return (
    <button
      ref={elementRef}
      className={`relative overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-white ${className}`}
      // He añadido un estilo básico. Puedes personalizarlo con Tailwind CSS como quieras.
      {...props}
    >
      {/* El <span> es importante para que el efecto se aplique al texto interior */}
      <span className='pointer-events-none relative block'>{children}</span>
    </button>
  );
}
