import React from "react";

function Footer() {
  const columns = [
    {
      title: "Shop and Learn",
      links: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "Vision",
        "AirPods",
        "TV & Home",
      ],
    },
    {
      title: "Account",
      links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Camp",
        "Apple Store App",
      ],
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
    },
    {
      title: "Apple Values",
      links: [
        "Accessibility",
        "Education",
        "Environment",
        "Inclusion and Diversity",
        "Privacy",
      ],
    },
  ];

  return (
    <footer
      className="bg-[#f5f5f7] text-[#1d1d1f] py-10 text-xs"
      data-name="footer"
      data-file="components/Footer.js"
    >
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="pb-8 border-b border-gray-300 text-gray-500 space-y-2">
          <p>
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device.
          </p>
          <p>
            2. Qualified Purchasers receive an Apple Gift Card when they
            purchase an eligible Mac or iPad at a Qualifying Location.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-gray-900 mb-2">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <div className="mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">
              Sales and Refunds
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
