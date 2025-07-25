"use client";
import { motion } from "motion/react";

export default function LandingButton({ title, subTitle, buttonColor }) {
  return (
    <div className="m-2">
      <motion.div
        className={`${buttonColor} rounded-full shadow-white`}
        whileHover={{
          scale: 1.07,
          boxShadow: "0 0 40px 5px rgba(255, 255, 255, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.25 }}
      >
        <button className={`w-full rounded-full ${buttonColor}`}>
          <div
            style={{ fontSize: "2.7rem", fontStretch: "semi-expanded" }}
            className="pt-serif-font-700 pr-3 text-5xl text-black/90 uppercase italic"
          >
            {title}
          </div>
          <div
            style={{ fontSize: "1.77rem", fontStretch: "semi-expanded" }}
            className="roboto-font-500 text-black/90"
          >
            {subTitle}
          </div>
        </button>
      </motion.div>
    </div>
  );
}
