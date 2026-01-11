import React from "react";
import { FaChevronRight } from "react-icons/fa";

function PromoGrids() {
  const promos = [
    {
      title: "MacBook Air",
      subtitle: "Lean. Mean. M3 machine.",
      image:
        "https://i.pcmag.com/imagery/reviews/06MB2dd9IF24omR8kjqGL2v-7.fit_lim.size_1050x.jpg",
    },
    {
      title: "iPad Pro",
      subtitle: "Unbelievably thin. Incredibly powerful.",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2030&auto=format&fit=crop",
    },
    {
      title: "Vision Pro",
      subtitle: "The era of spatial computing is here.",
      image:
        "https://www.apple.com/newsroom/images/media/introducing-apple-vision-pro/Apple-WWDC23-Vision-Pro-glass-230605_big.jpg.large.jpg",
    },
    {
      title: "AirPods Pro",
      subtitle: "Adaptive Audio. Now playing.",
      image:
        "https://images.unsplash.com/photo-1614288064424-11d2d386c474?q=80&w=822&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
      {promos.map((promo, index) => (
        <div
          key={index}
          className="relative h-[480px] sm:h-[520px] md:h-[580px] overflow-hidden group rounded-xl shadow-lg"
        >
          {/* Image */}
          <img
            src={promo.image}
            alt={promo.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-opacity-25"></div>

          {/* Text and Buttons */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-white">
              {promo.title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-4 text-white">
              {promo.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#0071e3] text-white rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-[#0077ed] hover:scale-105"
              >
                Learn more <FaChevronRight className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-[#0071e3] text-[#0071e3] rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-[#0071e3] hover:text-white hover:scale-105"
              >
                Buy <FaChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PromoGrids;
