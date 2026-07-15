import { useEffect, useRef, useState } from "react";
import heroStill from "@/assets/hero-still.jpg";

type Props = {
  /** If true, plays the video once then cross-fades to still. If false, shows still only. */
  video?: boolean;
  alt?: string;
};

export function HeroMedia({ video = false, alt = "Bespoke joinery by London Furniture Studio" }: Props) {
  // Only enable video on mobile/tablet (viewport < 1024px). Desktop shows still only.
  const [enableVideo, setEnableVideo] = useState(false);
  const [ended, setEnded] = useState(true);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video) return;
    const mq = window.matchMedia("(max-width: 1023px)");
    const apply = () => {
      const on = mq.matches;
      setEnableVideo(on);
      setEnded(!on);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [video]);

  useEffect(() => {
    if (!enableVideo) return;
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => setEnded(true));
  }, [enableVideo]);

  return (
    <>
      {/* Still always sits underneath — instant reveal when video hides */}
      <img
        src={heroStill}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      {video && enableVideo && (
        <video
          ref={ref}
          src="/hero.mp4"
          muted
          playsInline
          autoPlay
          preload="auto"
          onEnded={() => setEnded(true)}
          onTimeUpdate={(e) => {
            const v = e.currentTarget;
            if (v.duration && v.currentTime >= v.duration - 0.08) setEnded(true);
          }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            visibility: ended ? "hidden" : "visible",
            objectPosition: "center 30%",
          }}
        />
      )}
    </>
  );
}
