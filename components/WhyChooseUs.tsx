export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Global freight operations"
                className="h-full w-full object-cover hover:scale-105 transition-all duration-700"
              />
            </div>
            {/* Minimal Accent Line */}
            <div className="absolute -left-4 top-1/2 w-8 h-px bg-orange-500 hidden lg:block" />
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            <span className="text-xs font-medium text-orange-500 tracking-[0.2em] uppercase mb-6 block">
              Why Shivaantra
            </span>

            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 leading-tight mb-8">
              Moving goods with <span className="font-semibold">precision</span> and <span className="font-semibold">purpose</span>
            </h2>

            <p className="text-gray-600 mb-12 leading-relaxed max-w-md">
              We don't just move cargo—we engineer seamless supply chains that keep your business ahead of the curve.
            </p>

            <div className="space-y-10">
              <div className="group cursor-pointer">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs text-gray-400 font-mono">01</span>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                    Borderless Network
                  </h3>
                </div>
                <p className="text-sm text-gray-500 pl-8 max-w-sm">
                  Direct lanes across continents. No handoffs, no delays—just streamlined movement from origin to destination.
                </p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs text-gray-400 font-mono">02</span>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                    Transparent Operations
                  </h3>
                </div>
                <p className="text-sm text-gray-500 pl-8 max-w-sm">
                  Real-time visibility into every shipment. Know exactly where your cargo stands, always.
                </p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs text-gray-400 font-mono">03</span>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                    Adaptive Solutions
                  </h3>
                </div>
                <p className="text-sm text-gray-500 pl-8 max-w-sm">
                  From urgent air freight to complex multi-modal projects—we configure logistics around your timeline, not ours.
                </p>
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-gray-100">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-sm font-medium text-gray-900 hover:text-orange-500 transition-colors group"
              >
                Start a shipment
                <span className="w-8 h-px bg-current transition-all group-hover:w-12" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}