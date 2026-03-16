"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const features = [
  {
    number: "01",
    title: "Freight Forwarding",
    description:
      "End-to-end management of domestic and international cargo shipments with optimized routing and cost efficiency.",
    image: "/image-1.jpg",
  },
  {
    number: "02",
    title: "Air Freight",
    description:
      "Fast and reliable air cargo services designed for time-sensitive shipments and priority deliveries worldwide.",
    image: "/image-3.jpg",
  },
  {
    number: "03",
    title: "Customs Clearance",
    description:
      "Smooth and compliant handling of all import and export documentation ensuring faster border clearance.",
    image: "/image-2.jpg",
  },
  {
    number: "04",
    title: "Transportation",
    description:
      "Reliable land transportation solutions ensuring safe and timely cargo movement across domestic and international routes.",
    image: "/image-4.jpg",
  },
  {
    number: "05",
    title: "Warehousing",
    description:
      "Secure and scalable warehousing facilities with inventory management and efficient distribution support.",
    image: "/image-5.jpg",
  },
]

export default function Services() {

  const [activeItem, setActiveItem] = useState("item-0")

  const activeIndex = Number(activeItem.split("-")[1])

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div className="relative">

          <div className="absolute left-4 top-0 h-full w-px bg-slate-200" />

          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            Our Logistics Services
          </h2>

          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={(val) => val && setActiveItem(val)}
            className="space-y-6"
          >

            {features.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none">

                <AccordionTrigger className="group hover:no-underline">

                  <div className="flex gap-6 items-start text-left">

                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-white text-sm font-semibold text-slate-700">
                      {item.number}
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-amber-500 transition-colors">
                      {item.title}
                    </h3>

                  </div>

                </AccordionTrigger>

                <AccordionContent className="pl-14 text-slate-600 leading-relaxed">
                  {item.description}
                </AccordionContent>

              </AccordionItem>
            ))}

          </Accordion>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <Image
            key={features[activeIndex].image}
            src={features[activeIndex].image}
            alt="Logistics service"
            width={700}
            height={500}
            className="rounded-xl object-cover shadow-xl transition-all duration-500"
          />

        </div>

      </div>
    </section>
  )
}