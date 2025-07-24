"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function PrimaryMobileMastHead({
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
        className={`${backgroundColor} border-y-slate-500`}
      >
        <div className="mx-4 pt-6 sm:px-[6rem]">
          <Image
            className="sm:px-[6rem]"
            src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/ram-logo-trans-${swooshColor}-mobile.png`}
            alt="RAM Logo"
            width={1036}
            height={857.554}
            style={{ objectFit: "contain" }} // This will ensure the image maintains its aspect ratio
          />
        </div>

        <div className="justify-center py-7 text-center">
          <div className={`${titleColor} pt-serif-font-700 text-6xl italic`}>
            {title}
          </div>
          <div className="mt-4">
            {titles.map((title) => (
              <div className={`${topMarginForEachHierarchyButton}`} key={title}>
                <Link
                  key={title}
                  href={`${path}/${title.toLowerCase().replace(/ /g, "-")}`}
                >
                  <div
                    className={`${buttonsColor} roboto-font-500 m-4 rounded-2xl p-2 text-3xl text-black/90`}
                  >
                    {title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
