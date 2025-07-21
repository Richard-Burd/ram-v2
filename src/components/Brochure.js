"use client";
import { motion } from "motion/react";

export default function Brochure({
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
            className={`rounded-6xl my-4 ml-5 bg-[#96bba6] p-4 shadow-lg ${
              title || description
                ? "max-w-[480px]"
                : "max-w-[480px] bg-gray-100"
            }`}
            // style={{ maxWidth: "700px" }}
          >
            {(title || description) && (
              <div className="">
                <div className="pt-serif-font-700 border-b-2 border-b-gray-900 pb-5 text-center text-2xl italic">
                  {title}
                </div>
                <div className="averia-font-400 py-4">{description}</div>
              </div>
            )}
            <a
              href={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.pdf`}
              download
              target="_blank"
              rel="noopener noreferrer"
              // this value below makes the preview image bigger or smaller
              style={{ maxWidth: "400px" }}
              // if you see this yellow below, something is wrong
              className=""
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
                <img
                  src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.jpg`}
                  className="mb-10 drop-shadow-lg"
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
              <div className="young-serif-font relative text-7xl text-red-800/80 italic">
                {fileName}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
