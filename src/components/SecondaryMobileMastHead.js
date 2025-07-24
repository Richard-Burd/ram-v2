"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function SecondaryMobileMastHead({
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
        className={`${titleColor} pt-serif-font-700 pt-12 pb-14 text-center italic`}
      >
        <div
          style={{
            fontSize: "clamp(1rem, 13vw, 12rem)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="truncate text-center"
        >
          {title}
        </div>
      </div>
      <div className="mt-4 justify-center text-center">
        {titles.map((title) => (
          <div className={`${marginBetweenButtons}`} key={title}>
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
  );
}
