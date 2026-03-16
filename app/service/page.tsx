const services = [
  {
    id: "01",
    title: "Freight Forwarding",
    description: "Air, sea, and land cargo across global trade lanes — documentation, carriers, and timelines handled end to end.",
    features: ["Air Freight", "Sea Freight", "Land Freight", "Multimodal"],
    iconColor: "bg-blue-100 dark:bg-blue-950",
    strokeColor: "stroke-blue-700 dark:stroke-blue-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.5H2V9a2 2 0 012-2h16a2 2 0 012 2v7.5z" />
        <path d="M6 7V5a1 1 0 011-1h10a1 1 0 011 1v2" />
        <circle cx="6" cy="19.5" r="1.5" />
        <circle cx="18" cy="19.5" r="1.5" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Customs Clearance",
    description: "Licensed brokers handling every filing, classification, and duty — shipments clear borders without delays.",
    features: ["Import & Export", "Duty Management", "HS Classification", "Compliance"],
    iconColor: "bg-teal-100 dark:bg-teal-950",
    strokeColor: "stroke-teal-700 dark:stroke-teal-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h3" />
        <path d="M14.5 14.5l1.5 1.5 2.5-2.5" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Transportation",
    description: "Dedicated fleet with real-time tracking and flexible loads from first mile to last, domestic and cross-border.",
    features: ["Full Truckload", "Part Load (LTL)", "Last-Mile", "Live Tracking"],
    iconColor: "bg-amber-100 dark:bg-amber-950",
    strokeColor: "stroke-amber-700 dark:stroke-amber-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="1" y="4" width="15" height="12" rx="1.5" />
        <path d="M16 8h4l3 3.5V16h-7V8z" />
        <circle cx="5.5" cy="18" r="2" />
        <circle cx="18.5" cy="18" r="2" />
        <path d="M7.5 16h7" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="text-xs font-semibold tracking-[.18em] uppercase text-muted-foreground mb-4">
          Our Services
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-3">
          Everything your shipment needs.
        </h2>
        <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-md mb-14">
          From customs to the last mile — Shivaantra handles every link so your supply chain never skips a beat.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="border border-border rounded-2xl p-6 flex flex-col gap-5 hover:-translate-y-0.5 hover:border-foreground/20 transition-all duration-200"
            >
              {/* Icon row */}
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.iconColor} ${s.strokeColor}`}>
                  {s.icon}
                </div>
                <span className="text-xs font-bold text-muted-foreground/40 tabular-nums">{s.id}</span>
              </div>

              {/* Title + desc */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-sm font-bold text-foreground tracking-tight">{s.title}</h3>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">{s.description}</p>
              </div>

              <div className="h-px bg-border" />

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {s.features.map((f) => (
                  <span key={f} className="text-[11px] font-semibold text-muted-foreground bg-muted rounded-md px-2.5 py-1">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5 rounded-2xl border border-border">
          <div>
            <p className="text-sm font-bold text-foreground mb-0.5">Need a custom logistics plan?</p>
            <p className="text-xs font-medium text-muted-foreground">Talk to our team — we'll map the right route for your cargo.</p>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-xl bg-foreground text-background hover:opacity-80 transition-opacity"
          >
            Get a Free Quote
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}