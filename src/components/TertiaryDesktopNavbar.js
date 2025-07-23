import Link from "next/link";
import TertiaryDesktopNavbarButton from "./TertiaryDesktopNavbarButton";

export default function TertiaryDesktopNavbar({
  buttonColor,
  buttonBackground,
  titles,
  path,
}) {
  return (
    <nav className="border-b-2 border-y-slate-500 bg-neutral-950 px-1 py-2 text-white">
      <div className="container flex justify-between">
        <div className="flex flex-auto items-center justify-items-stretch">
          {titles.map((title) => (
            <Link
              key={title}
              className="mx-1 min-w-32 flex-grow"
              href={`${path}/${title.toLowerCase().replace(/ /g, "-")}`}
            >
              <TertiaryDesktopNavbarButton
                title={title}
                buttonColor={buttonColor}
                buttonBackground={buttonBackground}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
