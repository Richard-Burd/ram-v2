import Link from "next/link";
import TertiaryMobileNavbarButton from "./TertiaryMobileNavbarButton";

export default function TertiaryMobileNavbar({
  buttonColor,
  buttonBackground,
  titles,
  path,
}) {
  return (
    <nav className="border-b-2 border-y-slate-500 bg-neutral-950 p-1">
      <div className="container flex justify-between">
        <div className="flex flex-auto flex-wrap items-center justify-items-stretch p-1">
          {titles.map((title) => (
            <Link
              key={title}
              className="mx-1 min-w-32 flex-grow"
              href={`${path}/${title.toLowerCase().replace(/ /g, "-")}`}
            >
              <TertiaryMobileNavbarButton
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
