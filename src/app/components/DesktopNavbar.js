import Link from "next/link";
import NavbarButton from "./NavbarButton";

export default function DesktopNavbar() {
  return (
    <nav className="border-b-2 border-y-slate-500 bg-neutral-950 px-1 py-2 text-white">
      <div className="container flex justify-between">
        <div className="flex flex-auto items-center justify-items-stretch">
          <Link className="mx-1 min-w-32 flex-grow" href="/">
            <NavbarButton title="Home" bgColor="bg-homeBg" />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/about">
            <NavbarButton title="About" bgColor="bg-aboutBg" className="ml-4" />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/studies">
            <NavbarButton
              title="Studies"
              bgColor="bg-studiesBg"
              className="ml-4"
            />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/outreach">
            <NavbarButton
              title="Outreach"
              bgColor="bg-outreachBg"
              className="ml-4"
            />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/successes">
            <NavbarButton
              title="Successes"
              bgColor="bg-successesBg"
              className="ml-4"
            />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/organizing">
            <NavbarButton
              title="Organizing"
              bgColor="bg-organizingBg"
              className="ml-4"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
