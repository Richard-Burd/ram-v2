import Link from "next/link";
import SecondaryMobileNavbarButton from "./SecondaryMobileNavbarButton";

export default function SecondaryMobileNavbar({
  buttonColor,
  buttonBackground,
  titles,
  path,
}) {
  return (
    <nav className="border-b-2 border-y-slate-500 bg-neutral-950 px-1 py-2 text-white">
      <div className="flex justify-center">
        <div className="grid w-full grid-cols-2">
          {titles.map((title) => (
            <Link
              key={title}
              className="mx-1 min-w-32 flex-grow"
              href={`${path}/${title.toLowerCase().replace(/ /g, "-")}`}
            >
              <SecondaryMobileNavbarButton
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
