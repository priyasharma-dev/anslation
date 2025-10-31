import React from "react";
import { Search, ChevronDown } from "lucide-react";
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

  return (
    <section className="mt-8 sm:mt-10">
      {/* Title + results (right) */}
      <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.02em] text-white">All Blogs</h1>
          <p className="mt-1 sm:mt-2 text-white/70 text-lg">Insights, guides, and updates</p>
        </div>
        {/* Only show the result count once here */}
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
              className="w-full rounded-xl border border-white/10 bg-[#0f1623] pl-9 pr-3 py-2.5 text-sm sm:text-base text-white placeholder-white/55 outline-none focus:ring-2 focus:ring-white/25"
            />
          </div>

          <GradientButton as="button" type="submit" className="w-full md:w-auto justify-center" aria-label="Search blogs">
            Search
          </GradientButton>
        </div>
      </form>

      {/* Filters row (pills) */}
      <div
        className="
          mt-5 sm:mt-6
          flex items-center gap-2 sm:gap-3
          max-[639px]:overflow-x-auto max-[639px]:whitespace-nowrap max-[639px]:snap-x max-[639px]:snap-mandatory
          max-[639px]:-mx-4 max-[639px]:px-4
          sm:max-[799px]:grid sm:max-[799px]:grid-cols-2 sm:max-[799px]:gap-3
          [-ms-overflow-style:none] [scrollbar-width:none]
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <span className="shrink-0 text-white/70 text-sm">Filter by:</span>
        <Select label="Capabilities" value={capability} onChange={setCapability} options={CAPABILITIES} />
        <Select label="Industries" value={industry} onChange={setIndustry} options={INDUSTRIES} />
        <Select label="Geos" value={geo} onChange={setGeo} options={GEOS} />
      </div>
    </section>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label
      className={[
        "inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0f1623] px-3 py-2.5 text-sm",
        "shrink-0",
        "max-[639px]:snap-start", // Ensure snapping for horizontal layout
        "sm:max-[799px]:w-full sm:max-[799px]:shrink sm:max-[799px]:items-start sm:max-[799px]:gap-1.5 sm:max-[799px]:px-3 sm:max-[799px]:py-3", // Full width on 640–799px
      ].join(" ")}
    >
      {/* Show label on larger screens */}
      <span className="text-white/75 hidden sm:inline">{label}</span>
      <div className="relative w-full">
        <select
          aria-label={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={[
            "appearance-none bg-transparent pr-6 outline-none text-white/85",
            "min-w-[8rem] sm:min-w-0", // Minimum width for smaller screens
            "sm:max-[799px]:w-full",   // Full width for 640–799px screens
          ].join(" ")}
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#0b1020]">{o}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
      </div>
    </label>
  );
}

