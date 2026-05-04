import Image from "next/image";
import { cn } from "@/lib/utils";

export function PiattoLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3 font-semibold tracking-[0.16em] text-piatto-ink", className)}>
      <span className="relative size-10 shrink-0 overflow-hidden rounded-[0.9rem] shadow-[0_10px_24px_rgba(65,51,35,0.12)] ring-1 ring-piatto-line/80">
        <Image
          src="/brand/piatto-logo-icon.png"
          alt=""
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </span>
      <span>PIATTO</span>
    </span>
  );
}
