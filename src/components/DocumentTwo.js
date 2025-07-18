"use client";
import { motion } from "motion/react";

export default function Document({
  fileName,
  title = "",
  description = "",
  fileLabel = false,
}) {
  return (
    <div id="overall-container">
      <div id="some-other-item" className="parent">
        <div
          id="title-description-image-container-&-document-label"
          className={`mx-4 my-12 flex items-start p-4 text-slate-200 ${
            title || description
              ? "max-w-[480px] min-w-[480px]"
              : "max-w-[184px] min-w-[184px]"
          }`}
        >
          <div id="image-container-&-document-label" className="relative">
            <div
              id="image-container"
              style={{ minWidth: "150px", maxWidth: "150px" }}
            >
              <a
                href={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.pdf`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className=""
                draggable="false"
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
                    className="drop-shadow-lg"
                    alt={`missing PDF document: ${fileName}`}
                    draggable="false"
                    style={{
                      width: "100%",
                      border: "1px solid gray",
                      boxShadow: "7px 10px 10px rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </motion.div>
              </a>
            </div>
            <div id="document-label">
              {fileLabel && (
                <div className="absolute right-0 bottom-0 left-0 z-20 translate-x-3">
                  <div className="young-serif-font text-opacity-90 text-3xl font-semibold text-red-800 italic">
                    {fileName}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div id="title-&-description">
            {(title || description) && (
              <div className="title-n-description ml-8">
                <div className="averia-700 border-b-2 border-b-gray-200 pb-5 text-lg">
                  {title}
                </div>
                <div className="averia-400 pt-4">{description}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
