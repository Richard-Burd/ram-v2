"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function PrimaryMastHead({
  title,
  titles,
  titleColor,
  // subtitle, // currently not used
  swooshColor,
  backgroundColor,
  buttonsColor,
  path,
  topMarginForEachHierarchyButton,
}) {
  return (
    <div>
      <div
        // "bg-gradient-to-r" was replaced with "bg-gradient-24" for diagnoal effect
        className={`${backgroundColor} flex border-b-2 border-y-slate-500`}
      >
        <div className="ml-8 py-8">
          <Image
            src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/ram-logo-trans-${swooshColor}-v2.png`}
            alt="RAM Logo"
            width={1036}
            height={857.554}
            style={{ objectFit: "contain" }} // This will ensure the image maintains its aspect ratio
          />
        </div>

        <div className="flex w-full">
          {/* "items-center" removed & replaced w/"py-7" */}
          <div className="flex w-full justify-center py-7">
            <div className={`text-center`}>
              <div
                className={`${titleColor} pt-serif-font-700 text-7xl italic`}
              >
                {title}
              </div>
              {/* <div className="roboto-font-500 text-3xl">{subtitle}</div> */}
              <div className="mt-4">
                {titles.map((title) => (
                  <div
                    className={`${topMarginForEachHierarchyButton}`}
                    key={title}
                  >
                    <Link
                      key={title}
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
                          className={`roboto-font-500 text-opacity-90 m-2 p-2 text-4xl text-black`}
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
    </div>
  );
}
