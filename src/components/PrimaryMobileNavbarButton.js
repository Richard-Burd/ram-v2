"use client"; // Ensure this is present for App Router
import { usePathname } from "next/navigation";

export default function PrimaryMobileNavbarButton({
  title,
  buttonColor,
  buttonBackground,
}) {
  // state machine to track location in heirarchy
  const pathname = usePathname();
  const slug = title.toLowerCase().replace(/ /g, "-");
  const isActive =
    (slug === "home" && pathname === "/") ||
    (slug !== "home" && pathname.includes(slug)) ||
    (slug === "organiz'g" && pathname.includes("organizing"));
  const activeButton = isActive ? `${buttonBackground}` : null;

  return (
    <div className={`${activeButton} p-2`}>
      <div className={`${buttonColor} rounded-full`}>
        <div className="rounded-full py-3 shadow-[2px_4px_7px_rgba(0,0,0,0.95)]">
          <div className="pt-serif-font-700 text-center text-[1.0rem] text-black/80 uppercase italic">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

// -mx-1 -my-1 px-1 py-2
