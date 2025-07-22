import Link from "next/link";
import SecondaryMobileNavbarButton from "./SecondaryMobileNavbarButton";

export default function SecondaryMobileNavbar({
  buttonColor,
  buttonBackground,
  titles,
  path,
}) {
  return (
    <nav className="border-b-2 border-y-slate-500 bg-neutral-950">
      <div className="flex justify-center">
        <div className="grid w-full grid-cols-2 p-2">
          {titles.map((title) => (
            <div key={title}>
              <Link
                key={title}
                className="min-w-32 flex-grow"
                href={`${path}/${title.toLowerCase().replace(/ /g, "-")}`}
              >
                <SecondaryMobileNavbarButton
                  title={title}
                  buttonColor={buttonColor}
                  buttonBackground={buttonBackground}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
