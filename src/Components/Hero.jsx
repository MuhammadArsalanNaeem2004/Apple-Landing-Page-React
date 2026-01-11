import React from "react";

function Hero() {
  const heroItems = [
    {
      title: "iPhone 16 Pro",
      subtitle: "Hello, Apple Intelligence.",
      bgClass: "bg-[#f5f5f7] text-black",
      image:
        "https://images.unsplash.com/photo-1738344858158-66f743afcf3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "iPhone 16",
      subtitle: "Built for Apple Intelligence.",
      bgClass: "bg-[#f5f5f7] text-black",
      image:
        "https://images.unsplash.com/photo-1726839662758-e3b5da59b0fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Apple Watch Series 11",
      subtitle: "Turn resolutions into rountines.",
      bgClass: "bg-[#f5f5f7] text-black",
      image:
        "https://images.unsplash.com/photo-1649030612135-ea611fc9bbac?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Apple Watch Series 10",
      subtitle: "Thinnest. Biggest. Brilliant.",
      bgClass: "bg-[#f5f5f7] text-white",
      image:
        "https://images.unsplash.com/photo-1617043593449-c881f876a4b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div data-name="hero-section" data-file="Components/Hero.jsx">
      {heroItems.map((item, index) => (
        <div
          key={index}
          className={`relative w-full h-[680px] md:h-[750px] overflow-hidden flex flex-col items-center justify-start pt-16 md:pt-20 ${item.bgClass} mb-4`}
        >
          {/* Text Overlay */}
          <div className="z-10 text-center px-4 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl md:text-6xl font-semibold mb-2 tracking-tight">
              {item.title}
            </h2>
            <p className="text-xl md:text-2xl font-normal mb-6 tracking-wide">
              {item.subtitle}
            </p>

            <div className="flex items-center gap-4">
              <button className="bg-[#0071e3] text-white px-6 py-2 rounded-full hover:bg-[#0077ed] transition-colors text-base font-medium">
                Learn more
              </button>

              <button className="border border-[#0071e3] text-[#0071e3] px-6 py-2 rounded-full hover:bg-[#0071e3] hover:text-white transition-colors text-base font-medium">
                Buy
              </button>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
