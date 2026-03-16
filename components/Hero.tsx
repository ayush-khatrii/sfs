"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const slides = [
  {
    id: 1,
    image: "/image-1.jpg",
    eyebrow: "Freight Forwarding",
    heading: "Global Freight Forwarding",
    subheading:
      "End-to-end management of domestic and international cargo shipments.",
    primaryCta: { label: "Get a Free Quote", href: "#quote" },
    secondaryCta: { label: "Our Services", href: "#services" },
  },
  {
    id: 2,
    image: "/image-2.jpg",
    eyebrow: "Air Freight",
    heading: "Fast & Reliable Air Cargo",
    subheading:
      "Fast and reliable air cargo services for time-sensitive deliveries.",
    primaryCta: { label: "Air Freight Services", href: "#air-freight" },
    secondaryCta: { label: "Contact Us", href: "#contact" },
  },
  {
    id: 3,
    image: "/image-3.jpg",
    eyebrow: "Customs Clearance",
    heading: "Smooth & Hassle-Free Customs",
    subheading:
      "Smooth and compliant handling of all import and export documentation.",
    primaryCta: { label: "Customs Services", href: "#customs" },
    secondaryCta: { label: "Talk to an Expert", href: "#contact" },
  },
  {
    id: 4,
    image: "/image-4.jpg",
    eyebrow: "Transportation & Warehousing",
    heading: "Secure Transport & Storage",
    subheading:
      "Secure transportation and storage solutions for efficient supply chain management.",
    primaryCta: { label: "View Solutions", href: "#transport" },
    secondaryCta: { label: "Request Quote", href: "#quote" },
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-900">

      {/* Background Image */}
      <img
        key={slide.id}
        src={"/image-1.jpg"}
        alt=""
        className="absolute inset-0 w-full object-cover opacity-60"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col justify-end h-[70vh] px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-2xl space-y-5">

          {/* Eyebrow badge */}
          <Badge
            variant="outline"
            className="border-amber-400/60 text-amber-400 bg-amber-400/10 text-xs tracking-widest uppercase px-3 py-1 rounded-sm w-fit"
          >
            {slide.eyebrow}
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            {slide.heading}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-xl">
            {slide.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-7 rounded-sm h-12 text-sm tracking-wide"
            >
              <a href={slide.primaryCta.href}>
                {slide.primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/80 font-medium px-7 rounded-sm h-12 text-sm tracking-wide bg-transparent"
            >
              <a href={slide.secondaryCta.href}>
                {slide.secondaryCta.label}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar: dots (center) + counter + arrows (right) */}
      <div className="absolute z-20 bottom-0 left-0 right-0 pb-20 flex items-center justify-between px-6 sm:px-12 lg:px-24">

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full ${i === current ? "w-8 bg-amber-400" : "w-2 bg-white/30 hover:bg-white/60"
                }`}
            />
          ))}
        </div>

        {/* Counter + Arrows */}
        <div className="flex items-center gap-4">
          <span className="text-white/50 text-sm tabular-nums hidden sm:block">
            <span className="text-white font-semibold">{String(current + 1).padStart(2, "0")}</span>
            {" / "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-10 w-10 rounded-sm border-white/30 bg-white/5 hover:bg-white/15 hover:border-white/60 text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-10 w-10 rounded-sm border-white/30 bg-white/5 hover:bg-white/15 hover:border-white/60 text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}