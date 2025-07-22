"use client";
import { motion } from "motion/react";
import { italicizeRam } from "@/lib/italicizeRam";

export default function FragmentIdentifierMobileNavbarButton({
  title,
  buttonColor,
}) {
  const formattedTitle = italicizeRam(title);

  return (
    <motion.div
      className={`rounded-lg shadow-white`}
      whileHover={{
        scale: 1.07,
        boxShadow: "0 0 90px 5px rgba(255, 255, 255, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25 }}
    >
      <div
        className={`${buttonColor} rounded-lg shadow-[2px_4px_7px_rgba(0,0,0,0.95)]`}
      >
        <div className="roboto-font-500 px-1 py-1 text-center text-[1.0rem] text-black/80">
          {formattedTitle}
        </div>
      </div>
    </motion.div>
  );
}
