import { useEffect, useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

/** Imagem dentro de uma moldura em arco que se desloca ligeiramente ao fazer scroll. */
export function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const box = frameRef.current?.getBoundingClientRect();
      const img = imgRef.current;
      if (!box || !img) return;
      const progress = (box.top + box.height / 2 - window.innerHeight / 2) / window.innerHeight;
      const shift = Math.max(-1, Math.min(1, progress)) * -14;
      img.style.transform = `translate3d(0, ${shift}px, 0) scale(1.12)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={frameRef} className={`arch-frame ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover object-[center_20%]"
        style={{ transform: "scale(1.12)" }}
      />
    </div>
  );
}
