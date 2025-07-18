"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function SecondaryNavbarButton({
  title,
  buttonColor,
  buttonBackground,
}) {
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
          className={`rounded-lg shadow-white ${buttonColor}`}
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 90px 5px rgba(255, 255, 255, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25 }}
        >
          <div className={`rounded-lg shadow-[2px_4px_7px_rgba(0,0,0,0.95)]`}>
            <div className="roboto-font-500 pr-3 pl-2 text-center text-2xl text-black/80">
              {title}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
