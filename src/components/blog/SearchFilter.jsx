import React from "react";
import { Search, ChevronDown, SlidersHorizontal, X, Check  } from "lucide-react";
import GradientButton from "../ui/GradientButton";

export default function SearchFilter({
  q, setQ,
  capability, setCapability,
  industry, setIndustry,
  geo, setGeo,
  count = 0,
  CAPABILITIES = [], INDUSTRIES = [], GEOS = [],
  onSearch = () => {},
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

    // mobile sheet state
  const [open, setOpen] = React.useState(false);

  const prevRef = React.useRef({ capability, industry, geo });
   const openSheet = () => {
    prevRef.current = { capability, industry, geo };
    setOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeSheet = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const handleClear = () => {
    setCapability("All");
    setIndustry("All");
    setGeo("All");
  };

  const handleApply = () => {
    closeSheet();
    onSearch();
  };

  const handleCancel = () => {
    const { capability: c, industry: i, geo: g } = prevRef.current;
    setCapability(c); setIndustry(i); setGeo(g);
    closeSheet();
  };

    const hasActiveFilters = (q?.trim() || "") !== "" || capability !== "All" || industry !== "All" || geo !== "All";
  
  
  return (
    <section className="mt-8 sm:mt-10">
      {/* Title + results (right) */}
      <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.02em] text-white">All Blogs</h1>
          <p className="mt-1 sm:mt-2 text-white/70 text-lg">Insights, guides, and updates</p>
        </div>

        <div className="text-white/65 text-sm sm:text-base" aria-live="polite" aria-atomic="true">
          {count} results
        </div>
      </div>

      {/* Search input + blue button */}
      <form onSubmit={handleSubmit} className="mt-5 sm:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 md:gap-4 items-center">
          <div className="group relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/55" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search..."
              aria-label="Search blogs"
              className="w-full rounded-xl border border-white/10 bg-white/5 pl-9 pr-3 py-2.5 text-sm sm:text-base text-white placeholder-white/55 outline-none focus:ring-2 focus:ring-white/25"
            />
          </div>

          <GradientButton as="button" type="submit" className="w-full md:w-auto justify-center" aria-label="Search blogs">
            Search
          </GradientButton>
        </div>
      </form>

      
      {/* Mobile: collapsed filter bar (<=639px) */}
      <div className="mt-5 sm:hidden">
        <button
          type="button"
          onClick={openSheet}
          className="w-full inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/85"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="mobile-filters"
        >
          <span className="inline-flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 opacity-80" />
            Filter Blogs
          </span>
          <span className="text-white/50">⋯</span>
        </button>
         {hasActiveFilters && count === 0 && (
          <div className="mt-3 rounded-xl border border-white/10 bg-[#0b1020]/70 p-3">
            <p className="text-white/85 text-sm font-medium">No results found</p>
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={handleClear}
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85 hover:bg-white/10"
              >
                Clear filters
              </button>
              <GradientButton onClick={onSearch} className="flex-1 justify-center">Search again</GradientButton>
            </div>
          </div>
        )}
      </div>
      
      {/* ≥640px: keep your inline pills */}
      <div className="hidden sm:flex items-center gap-3 mt-6">
        <span className="shrink-0 text-white/70 text-sm">Filter by:</span>
        <Select label="Capabilities" value={capability} onChange={setCapability} options={CAPABILITIES} />
        <Select label="Industries" value={industry} onChange={setIndustry} options={INDUSTRIES} />
        <Select label="Geos" value={geo} onChange={setGeo} options={GEOS} />
      </div>
      {/* Mobile bottom sheet */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[2147483646] bg-black/60 backdrop-blur-sm overscroll-contain"
            onClick={handleCancel}
          />
          {/* Panel */}
          <div
            id="mobile-filters"
            role="dialog"
            aria-modal="true"
            className="
             fixed inset-x-0 bottom-0 z-[2147483647] isolate        /* MOBILE ONLY */
              rounded-t-2xl border-t border-white/10 bg-[#0b1020]
              pt-3 shadow-[0_-20px_60px_rgba(0,0,0,0.6)]
              max-h-[85vh] overflow-auto overscroll-contain pb-24 
            "
          >
                <div className="px-4 flex items-center justify-between">
              <h3 className="text-white/90 font-semibold">Filters</h3>
              <button className="p-2 rounded-lg hover:bg-white/5" onClick={handleCancel} aria-label="Close filters">
                <X className="h-5 w-5 text-white/70" />
              </button>
          </div>
              <div className="mt-4 px-4 grid grid-cols-1 gap-3">
              <SelectMobile label="Capabilities" value={capability} onChange={setCapability} options={CAPABILITIES} />
              <SelectMobile label="Industries" value={industry} onChange={setIndustry} options={INDUSTRIES} />
              <SelectMobile label="Geos" value={geo} onChange={setGeo} options={GEOS} />
            </div>
             <div className="
              sticky bottom-0 left-0 right-0 z-[2147483647]
              border-t border-white/10 bg-[#0b1020]/95 backdrop-blur
              px-4 py-3 pb-[calc(env(safe-area-inset-bottom,0))]
            ">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleClear}
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/85 hover:bg-white/10"
              >
                Clear
              </button>
              <GradientButton className="flex-1 justify-center" onClick={handleApply}>
                Apply
              </GradientButton>
            </div>
          </div>
          </div>
        </>
      )}
    </section>
  );
}

// Select component for desktop
function Select({ label, value, onChange, options }) {
   const [isOpen, setIsOpen] = React.useState(false);
   const ref=React.useRef(null);

  React.useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      role="combobox"
      tabIndex={0}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      onMouseDown={(e) => {
        const panel = ref.current?.querySelector("[data-dropdown]");
        if (panel && panel.contains(e.target)) return;
        setIsOpen((v) => !v);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setIsOpen((v) => !v); }
        if (e.key === "Tab") setIsOpen(false);
      }}
      className="relative inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0f1623] px-3 py-2.5 text-sm w-full cursor-pointer select-none hover:border-white/15 hover:bg-white/5 transition"
    >
      <span className="text-white/75 hidden sm:inline">{label}</span>

      <div className="relative w-full">
        <select
          aria-label={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none bg-transparent pr-8 pl-3 outline-none text-white/85 pointer-events-none min-w-[8rem] sm:min-w-0 sm:max-[799px]:w-full"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#0b1020]">{o}</option>
          ))}
        </select>

        <ChevronDown
          className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60 pointer-events-none transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />

        {isOpen && (
          <div
            data-dropdown
            role="listbox"
            className="absolute left-0 right-0 mt-2 rounded-xl border border-white/10 bg-[#0b1020]/95 backdrop-blur-sm p-1 z-[1100] isolate shadow-2xl ring-1 ring-white/10 max-h-60 overflow-auto"
          >
            {options.map((option) => {
              const selected = option === value;
              return (
                <div
                  key={option}
                  role="option"
                  aria-selected={selected}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={[
                    "flex items-center justify-between gap-3 py-2 px-3 rounded-lg cursor-pointer transition",
                    "hover:bg-blue-600/20 active:bg-blue-600/30",
                    selected ? "bg-blue-600/35 text-white ring-1 ring-blue-500/50" : "text-white/90",
                  ].join(" ")}
                >
                  <span>{option}</span>
                  {selected && <Check className="h-4 w-4 text-blue-300" />}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
  
/* ---------------- Mobile Select ---------------- */
function SelectMobile({ label, value, onChange, options }) {
   const [isOpen, setIsOpen] = React.useState(false);
    const ref = React.useRef(null);

  React.useEffect(() => {
    const onDocPointer = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
  document.addEventListener("pointerdown", onDocPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDocPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

   const toggleFromPill = (e) => {
    const panel = ref.current?.querySelector("[data-dropdown]");
    if (panel && panel.contains(e.target)) return;
    e.preventDefault(); 
    setIsOpen((v) => !v);
  };

  return (
   <label className="block text-sm text-white/80" ref={ref}>
      <span className="mb-1 block">{label}</span>

      <div
        role="combobox"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onPointerDown={toggleFromPill}
        onClick={() => setIsOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setIsOpen((v) => !v); }
          if (e.key === "Tab") setIsOpen(false);
        }}
        className="relative w-full rounded-xl border border-white/10 bg-[#0f1623] px-3 py-2.5 pr-8 text-white/90 outline-none cursor-pointer
          hover:border-white/15 hover:bg-white/5 transition"
      >
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full bg-transparent outline-none pointer-events-none"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#0b1020]">{o}</option>
          ))}
        </select>

        <ChevronDown 
        className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60 pointer-events-none transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
        {isOpen && (
          <div
           data-dropdown
            role="listbox"
            className="absolute left-0 right-0 mt-2 rounded-xl border border-white/10 bg-[#0b1020]/95 backdrop-blur-sm p-1 z-50 shadow-2xl
            ring-1 ring-white/10 max-h-60 overflow-auto"
          >
            {options.map((option) => {
               const selected = option === value;
                 return (
              <div
                key={option}
                role="option"
                aria-selected={selected}
                 onPointerDown={(e) => {
                    e.stopPropagation();
                    onChange(option);
                    setIsOpen(false);
                  }}
                className={[
                    "flex items-center justify-between gap-3 py-2 px-3 rounded-lg cursor-pointer transition",
                    "hover:bg-blue-600/20 active:bg-blue-600/30",             
                    selected ? "bg-blue-600/35 text-white ring-1 ring-blue-500/50"
                             : "text-white/90",
                  ].join(" ")}
              >
                <span>{option}</span>
                 {selected && <Check className="h-4 w-4 text-blue-300" />}
                
              </div>
               );
             })}
          </div>
        )}
      </div>
 </label>
  );
}