"use client"; // Ensure this is present for App Router
import { motion } from "motion/react";

import { usePathname } from "next/navigation";

export default function PrimaryDesktopNavbarButton({
  title,
  buttonColor,
  buttonBackground,
}) {
  // state machine to track location in heirarchy
  const pathname = usePathname();
  const isActive = pathname.includes(title.toLowerCase().replace(/ /g, "-"));
  const activeButton = isActive
    ? `-mx-1 -my-2 px-1 py-2 ${buttonBackground}`
    : null;

  return (
    <div className={`${activeButton}`}>
      <motion.div
        className={`${buttonColor} rounded-full shadow-white`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: 1.07,
          duration: 0.1,
          boxShadow: "0 0 90px 5px rgba(255, 255, 255, 0.4)",
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="rounded-full shadow-[2px_4px_7px_rgba(0,0,0,0.95)]">
          <div className="pt-serif-font-700 pr-3 pl-2 text-center text-2xl text-black/80 uppercase italic">
            {title}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
