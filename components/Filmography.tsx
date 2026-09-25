"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { credits, Credit } from "@/data/actor";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let ytApiPromise: Promise<any> | null = null;
function loadYouTubeApi(): Promise<any> {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT);
    };
    if (!document.getElementById("youtube-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  });
  return ytApiPromise;
}

function embedUrl(credit: Credit) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "0",
    loop: "1",
    controls: "0",
    playsinline: "1",
    modestbranding: "1",
    rel: "0",
    disablekb: "1",
    iv_load_policy: "3",
    fs: "0",
    enablejsapi: "1",
  });
  if (typeof window !== "undefined") {
    params.set("origin", window.location.origin);
  }
  if (credit.isPlaylist) {
    params.set("listType", "playlist");
    params.set("list", credit.youtubeId);
    return `https://www.youtube.com/embed/videoseries?${params.toString()}`;
  }
  params.set("playlist", credit.youtubeId);
  return `https://www.youtube.com/embed/${credit.youtubeId}?${params.toString()}`;
}

function thumbnailUrl(credit: Credit) {
  if (credit.isPlaylist) return null;
  return `https://i.ytimg.com/vi/${credit.youtubeId}/hqdefault.jpg`;
}

function VideoCard({ credit, index }: { credit: Credit; index: number }) {
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const pollRef = useRef<number | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const thumb = thumbnailUrl(credit);

  useEffect(() => {
    if (!active) return;

    let cancelled = false;
    loadYouTubeApi().then((YT) => {
      if (cancelled || !YT || !iframeRef.current) return;
      playerRef.current = new YT.Player(iframeRef.current, {
        events: {
          onReady: () => {
            pollRef.current = window.setInterval(() => {
              if (draggingRef.current) return;
              const p = playerRef.current;
              const duration = p?.getDuration?.() || 0;
              const current = p?.getCurrentTime?.() || 0;
              if (duration > 0) setProgress(current / duration);
            }, 250);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (pollRef.current) window.clearInterval(pollRef.current);
      pollRef.current = null;
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {}
        playerRef.current = null;
      }
      setProgress(0);
    };
  }, [active, credit.id]);

  function seekToClientX(clientX: number) {
    const bar = barRef.current;
    const player = playerRef.current;
    if (!bar || !player?.getDuration) return;
    const rect = bar.getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    setProgress(fraction);
    const duration = player.getDuration() || 0;
    if (duration > 0) player.seekTo(fraction * duration, true);
  }

  function handleBarPointerDown(e: React.PointerEvent) {
    e.stopPropagation();
    draggingRef.current = true;
    seekToClientX(e.clientX);
    const onMove = (ev: PointerEvent) => seekToClientX(ev.clientX);
    const onUp = () => {
      draggingRef.current = false;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)}>
      <div className="group">
        {/* Video frame — nothing of ours is ever drawn on top of it except our own scrub bar, so it can never collide with YouTube's own UI */}
        <div
          className="relative aspect-video w-full cursor-pointer overflow-hidden bg-navy/90"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => !draggingRef.current && setActive(false)}
          onClick={() => setActive((v) => !v)}
        >
          {active ? (
            <>
              <iframe
                ref={iframeRef}
                src={embedUrl(credit)}
                title={credit.title}
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                loading="lazy"
              />
              <div
                ref={barRef}
                onPointerDown={handleBarPointerDown}
                onClick={(e) => e.stopPropagation()}
                className="group/bar absolute inset-x-0 bottom-0 z-10 flex h-4 cursor-pointer items-end"
              >
                <div className="relative h-1 w-full bg-cream/25 transition-all duration-150 group-hover/bar:h-1.5">
                  <div
                    className="absolute inset-y-0 left-0 bg-accent"
                    style={{ width: `${progress * 100}%` }}
                  />
                  <div
                    className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent opacity-0 shadow transition-opacity duration-150 group-hover/bar:opacity-100"
                    style={{ left: `calc(${progress * 100}% - 5px)` }}
                  />
                </div>
              </div>
            </>
          ) : thumb ? (
            <>
              <img
                src={thumb}
                alt={credit.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/30 transition-colors duration-300 group-hover:bg-navy/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <PlayIcon />
                </span>
              </div>
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-serif text-lg text-cream/25">{credit.title}</span>
            </div>
          )}
        </div>

        {/* Caption lives below the frame, never over it */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl text-navy transition-colors duration-300 group-hover:text-accent md:text-2xl">
              {credit.title}{" "}
              <span className="text-base text-navy/50 md:text-lg">({credit.type})</span>
            </h3>
            <p className="mt-1 text-sm text-navy/60">
              {credit.year} · {credit.role} · {credit.director}
            </p>
          </div>
          <span className="font-serif text-sm text-navy/30">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-navy/10 pt-3">
          <a
            href={credit.link}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow underline-hover inline-flex items-center gap-2 text-navy/70 transition-colors duration-300 hover:text-accent"
          >
            Watch on YouTube <span aria-hidden>↗</span>
          </a>
          <span className="eyebrow flex items-center hidden md:block gap-1.5 text-navy/40">
            <SoundIcon /> Hover to play
          </span>
        </div>
      </div>
    </Reveal>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="#1D3557" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <path d="M16.5 8.5a5 5 0 0 1 0 7" />
      <path d="M19 6a8.5 8.5 0 0 1 0 12" />
    </svg>
  );
}

export function Filmography() {
  return (
    <section id="work" className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-accent">Filmography</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">Selected Work</h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-xs text-sm text-navy/60">
              Web series, short films, music video and advertisement,{" "}
              {Math.min(...credits.map((c) => c.year))}–{Math.max(...credits.map((c) => c.year))}.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:mt-16 md:grid-cols-2">
          {credits.map((credit, index) => (
            <VideoCard key={credit.id} credit={credit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
