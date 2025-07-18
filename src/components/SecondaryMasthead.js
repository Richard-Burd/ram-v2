"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function SecondaryMastHead({
  title,
  description,
  titles,
  titleColor,
  buttonsColor,
  path,
  marginBetweenButtons,
}) {
  return (
    <div>
      <div
        className={`${titleColor} pt-serif-font-700 pt-12 pb-14 text-center text-7xl italic`}
      >
        {title}
      </div>
      <div className="flex w-full">
        <div className="mx-12 max-w-md text-2xl text-slate-200">
          {description}
        </div>
        <div className="flex w-full justify-center">
          <div className="pr-10 text-center">
            <div className="mt-0">
              {titles.map((title) => (
                <div key={title} className={`${marginBetweenButtons}`}>
                  <Link
                    href={`${path}/${title.toLowerCase().replace(/ /g, "-")}`}
                  >
                    <motion.div
                      className={`${buttonsColor} rounded-2xl shadow-white`}
                      whileHover={{
                        x: 15,
                        boxShadow: "0 0 40px 5px rgba(255, 255, 255, 0.4)",
                      }}
                      whileTap={{ x: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div
                        className={`roboto-font-500 text-opacity-90 m-2 p-2 text-4xl text-[#0a2c0e]`}
                      >
                        {title}
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
