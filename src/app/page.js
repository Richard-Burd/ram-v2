"use client";
import React, { useEffect, useState } from "react";
import LandingButtons from "../components/LandingButtons";
import Image from "next/image";

const imagePath = `${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}`;

export default function Home() {
  const [backgroundFillRate, setBackgroundFillRate] = useState(20);

  useEffect(() => {
    // Function to update backgroundFillRate based on viewport height
    const updateBackgroundFillRate = () => {
      const viewportHeight = window.innerHeight;
      setBackgroundFillRate(viewportHeight <= 800 ? "17" : "10");
      if (viewportHeight <= 550) {
        setBackgroundFillRate("23");
      }
    };

    // Attach event listener to window resize
    window.addEventListener("resize", updateBackgroundFillRate);

    // Initial update
    updateBackgroundFillRate();

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateBackgroundFillRate);
    };
  }, []);

  return (
    <div>
      <div className="bg-black">
        <div className={`right-fade-${backgroundFillRate}`}>
          <div className={`left-fade-${backgroundFillRate}`}>
            <div id="logo-desktop-version" className="hidden lg:block">
              <div className="flex items-center justify-center py-4">
                <Image
                  width={765}
                  height={1}
                  src={`${imagePath}/ram-logo-trans-red.v2.png`}
                  alt="Red RAM Logo (desktop version)"
                />
              </div>
              <LandingButtons />
            </div>
            <div id="logo-mobile-version" className="bg-black/50 lg:hidden">
              <div className="flex items-center justify-center px-4 py-4 sm:px-[6rem]">
                <img
                  src={`${imagePath}/ram-logo-trans-red-mobile.png`}
                  alt="Red RAM Logo (mobile version)"
                  className="h-auto w-full"
                  width={300}
                  height={1}
                />
              </div>
              <LandingButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
