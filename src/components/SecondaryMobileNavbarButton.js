"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function SecondaryMobileNavbarButton({
  title,
  buttonColor,
  buttonBackground,
}) {
  // state machine to track location in heirarchy
  const pathname = usePathname();
  const isActive = pathname.includes(title.toLowerCase().replace(/ /g, "-"));

  // Apply conditional styling based on isActive
  const behindButtonStyle = isActive ? null : `p-2`;

  const buttonStyle = isActive ? `p-2 ${buttonBackground}` : null;

  return (
    <div className={`${behindButtonStyle}`}>
      <div className="">
        <div className={`${buttonStyle}`}>
          <motion.div
            className={`rounded-lg shadow-white ${buttonColor}`}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 0 90px 5px rgba(255, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className={`rounded-lg shadow-[2px_4px_7px_rgba(0,0,0,0.95)]`}>
              <div className="roboto-font-500 py-1 text-center text-[1.0rem] text-black/80">
                {title}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
