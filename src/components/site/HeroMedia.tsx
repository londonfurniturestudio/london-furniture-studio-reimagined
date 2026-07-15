import { useEffect, useRef, useState } from "react";
import heroStill from "@/assets/hero-still.jpg";

type Props = {
  /** If true, plays the video once then cross-fades to still. If false, shows still only. */
  video?: boolean;
  alt?: string;
};

export function HeroMedia({ video = false, alt = "Bespoke joinery by London Furniture Studio" }: Props) {
  const [ended, setEnded] = useState(!video);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video) return;
    const v = ref.current;
    if (!v) return;
    // Best-effort autoplay
    const tryPlay = () => v.play().catch(() => setEnded(true));
    tryPlay();
  }, [video]);

  return (
    <>
      <img
        src={heroStill}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: ended ? 1 : 0,
          transition: "opacity 1400ms ease-in-out",
        }}
        fetchPriority="high"
      />
      {video && (
        <video
          ref={ref}
          src="/hero.mp4"
          muted
          playsInline
          autoPlay
          preload="auto"
          onEnded={() => setEnded(true)}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: ended ? 0 : 1,
            transition: "opacity 1400ms ease-in-out",
            objectPosition: "center 30%",
          }}
        />
      )}
    </>
  );
}
