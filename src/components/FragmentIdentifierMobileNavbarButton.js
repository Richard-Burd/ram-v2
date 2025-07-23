"use client";
import { italicizeRam } from "@/lib/italicizeRam";

export default function FragmentIdentifierMobileNavbarButton({
  title,
  buttonColor,
}) {
  const formattedTitle = italicizeRam(title);

  return (
    <div className="p-1">
      <div
        className={`${buttonColor} rounded-lg shadow-[2px_4px_7px_rgba(0,0,0,0.95)]`}
      >
        <div className="roboto-font-500 px-1 py-1 text-center text-[1.0rem] text-black/80">
          {formattedTitle}
        </div>
      </div>
    </div>
  );
}
