// components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0D1D3D] py-12 sm:py-16 lg:py-20 overflow-hidden min-h-125 sm:min-h-150">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#0D1D3D]/90"></div>
      </div>

      {/* Dotted Map Overlay */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <Image src="/map.svg" alt="World Map" fill className="object-cover" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-white/80 text-xs sm:text-sm">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          We are launching soon
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Bridging Africa&apos;s <span className="text-red-400">Research</span>
          <br className="hidden sm:block" />
          <span className="text-red-400"> Visibility</span> Gap
        </h1>

        <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
          Web of SEM (Science, Education and Management) is a
          standards-compliant, Africa-centric scholarly publishing
          infrastructure designed to align local research with global discovery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#2d3f5f] text-white rounded-lg hover:bg-[#3d4f6f] transition-colors text-sm sm:text-base">
            <div className="relative flex items-center">
              <Image
                src="/avatar-1.png"
                alt="User"
                width={20}
                height={20}
                className="rounded-full border-2 border-[#3d4f6f]"
              />
              <Image
                src="/avatar-2.png"
                alt="User"
                width={20}
                height={20}
                className="rounded-full border-2 border-[#3d4f6f] -ml-2"
              />
            </div>
            Join our Waitlist
          </button>
          <button className="w-full sm:w-auto px-6 py-3 text-white hover:text-white/80 transition-colors text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
