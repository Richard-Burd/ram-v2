"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { italicizeRam } from "@/lib/italicizeRam";

export default function TertiaryNavbarButton({
  title,
  buttonColor,
  buttonBackground,
}) {
  const formattedTitle = italicizeRam(title);

  // state machine to track location in heirarchy
  const pathname = usePathname();
  const isActive = pathname.includes(title.toLowerCase().replace(/ /g, "-"));

  // Apply conditional styling based on isActive
  const behindButtonStyle = isActive ? `-my-2 py-2 -mx-1 px-1 bg-white` : null;
  const buttonStyle = isActive
    ? `-my-2 py-2 -mx-1 px-1 ${buttonBackground}`
    : null;

  return (
    <div className={`${behindButtonStyle}`}>
      <div className={`${buttonStyle}`}>
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
            <div className="roboto-font-500 px-3 text-center text-xl text-[#0a2c0e]">
              {formattedTitle}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
