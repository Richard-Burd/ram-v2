"use client"; // Ensure this is present for App Router
import { motion } from "motion/react";

import { usePathname } from "next/navigation";

export default function NavbarButton({ title, bgColor }) {
  // state machine to track location in heirarchy
  const pathname = usePathname();
  const isActive = pathname.includes(title.toLowerCase().replace(/ /g, "-"));

  return (
    <div>
      <motion.div
        className={`${bgColor} rounded-full shadow-white`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: 1.07,
          duration: 0.1,
          boxShadow: "0 0 90px 5px rgba(255, 255, 255, 0.4)",
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="shadow-lower-right-offset rounded-full">
          <div className="pt-serif-700 text-opacity-80 pr-3 pl-2 text-center text-2xl text-black uppercase italic">
            {title}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
