import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import type { HeroVideo } from "../../types/content";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  video: HeroVideo;
}

function embedUrl(video: HeroVideo): string {
  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });

  return `https://www.youtube-nocookie.com/embed/${video.id}?${params}`;
}

export default function VideoModal({ open, onClose, video }: VideoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // showModal() blocks interaction but not scrolling.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Clicks on ::backdrop are dispatched to the dialog itself, so this fires
  const onBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={onBackdropClick}
      aria-label={video.title}
      className="m-auto w-[min(64rem,92vw)] bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm open:animate-modal-in backdrop:open:animate-fade-in"
    >
      <div className="overflow-hidden rounded-2xl border border-ink-inverse/10 bg-surface-emphasis">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <p className="text-sm font-bold text-ink-inverse">{video.title}</p>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="cursor-pointer rounded-lg px-2 py-1 text-xl leading-none text-ink-inverse transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        {open && (
          <iframe
            src={embedUrl(video)}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full border-0"
          />
        )}
      </div>
    </dialog>
  );
}
