"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function Figure({
  fileName,
  title = "",
  description = "",
  fileLabel = false,
}) {
  return (
    <div>
      <div className="parent">
        <div className="child-2">
          <div
            className={`mx-4 my-12 p-4 shadow-lg ${
              title || description
                ? "max-w-[450px]"
                : "max-w-[450px] bg-gray-100"
            }`}
          >
            {(title || description) && (
              <div className="">
                <div className="averia-font-700 border-b-2 border-b-gray-200 pb-5 text-center text-lg text-slate-200">
                  {title}
                </div>
                <div className="averia-400 py-4 text-slate-200">
                  {description}
                </div>
              </div>
            )}
            <a
              href={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.jpg`}
              download
              target="_blank"
              rel="noopener noreferrer"
              // this value below makes the preview image bigger or smaller
              style={{ maxWidth: "400px" }}
              // if you see this yellow below, something is wrong
              className="bg-yellow-400"
            >
              <motion.div
                className={``}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  width={400}
                  height={400}
                  src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.jpg`}
                  className="drop-shadow-lg"
                  alt={`missing PDF document: ${fileName}`}
                  style={{
                    width: "100%",
                    border: "1px solid gray",
                    boxShadow: "7px 10px 10px rgba(0, 0, 0, 0.5)",
                  }}
                />
              </motion.div>
            </a>
          </div>
        </div>
        {fileLabel && (
          <div className="child-1">
            <div className="absolute z-20 translate-x-12 -translate-y-44">
              <div className="young-serif-font relative text-7xl text-red-800/90 italic">
                <div className="text-center">{fileName}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
