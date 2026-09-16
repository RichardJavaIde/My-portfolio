"use client";

import { useEffect, useState } from "react";

/**
 * Barra fina fija arriba que muestra el progreso de lectura (scroll).
 *
 * La fórmula: cuánto hemos bajado / cuánto se puede bajar.
 *   scrollY                 → píxeles bajados desde el top
 *   scrollHeight - innerHeight → total "bajable" (alto del doc − alto de la ventana)
 * El `passive: true` le dice al navegador "no me bloquees el scroll" → no frena
 * el rendimiento al hacer la animación fluida.
 *
 * Se pinta con `aria-hidden` porque es decorativo (un lector de pantalla no
 * necesita saber el porcentaje de la página).
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    onScroll(); // valor inicial (por si la página no alcanza a scrollear)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent"
    >
      <span
        className="block h-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}