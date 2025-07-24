"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

export default function BrochureFig({
  fileName,
  figureNumber,
  borderColor = "black",
  originalWidth = "100%",
}) {
  const [width, setWidth] = useState(originalWidth); // Local state for width

  const toggleSize = () => {
    // Toggle size only if originalWidth is not "100%"
    if (originalWidth !== "100%") {
      setWidth(width === originalWidth ? "100%" : originalWidth);
    }
  };

  return (
    <div className="">
      <motion.div
        onClick={toggleSize}
        animate={{ width }}
        style={{ width }}
        className="cursor-pointer"
      >
        <div className="child-1">
          <div className="mr-4">
            <img
              src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}`}
              className=""
              alt={`missing PDF document: ${fileName}`}
              style={{
                width: "100%",
                border: `5px solid ${borderColor}`,
                boxShadow: `15px 15px 0px ${borderColor}`,
              }}
            />
          </div>
          {figureNumber && (
            <div className="child-2">
              <div className="absolute z-20 hidden translate-x-12 -translate-y-44 md:block">
                <div className="young-serif-font relative text-8xl text-red-800/90 italic">
                  {figureNumber}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
