"use client";
import { usePathname } from "next/navigation";
import { italicizeRam } from "@/lib/italicizeRam";

export default function TertiaryDesktopNavbarButton({
  title,
  buttonColor,
  buttonBackground,
}) {
  const formattedTitle = italicizeRam(title);

  // state machine to track location in heirarchy
  const pathname = usePathname();
  const isActive = pathname.includes(title.toLowerCase().replace(/ /g, "-"));

  // Apply conditional styling based on isActive
  const behindButtonStyle = isActive ? null : `px-1 py-2`;

  const buttonStyle = isActive ? `px-1 py-2 ${buttonBackground}` : null;

  return (
    <div className={`${behindButtonStyle}`}>
      <div className={`${buttonStyle}`}>
        <div
          className={`${buttonColor} rounded-lg shadow-[2px_4px_7px_rgba(0,0,0,0.95)]`}
        >
          <div className="roboto-font-500 px-1 py-1 text-center text-[1.0rem] text-black/80">
            {formattedTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
