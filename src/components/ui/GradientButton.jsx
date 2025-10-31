import React from "react";
import { Loader2 } from "lucide-react";

export default function GradientButton({
  children = "Search",
  loading = false,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={[
        "group relative inline-flex items-center justify-center select-none",
        "rounded-2xl px-7 py-3 text-[15px] font-semibold text-white",
        "transition-all duration-200 focus:outline-none",
        "focus-visible:ring-2 focus-visible:ring-white/40 ring-1 ring-white/10",
        // gradient + border + sheen
        "bg-[linear-gradient(180deg,#173362_0%,#1d4ed8_50%,#2a6df1_100%)]",
        "shadow-[0_12px_24px_rgba(29,78,216,0.35),inset_0_1px_0_rgba(255,255,255,0.12)]",
        "hover:brightness-110 hover:shadow-[0_16px_28px_rgba(29,78,216,0.45),inset_0_1px_0_rgba(255,255,255,0.18)]",
        "active:translate-y-[1px]",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[1rem]",
        "after:[background:linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0)_38%)]",
        className,
      ].join(" ")}
    >
      <span
        aria-hidden
        className="absolute -inset-px rounded-[1rem] bg-[radial-gradient(120%_120%_at_50%_10%,rgba(59,130,246,.35),transparent_55%)] opacity-40 blur-[6px] transition-opacity group-hover:opacity-60"
      />
      <span className="relative z-[1] flex items-center gap-2">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Searching…</span>
          </>
        ) : (
          children
        )}
      </span>
    </button>
  );
}
