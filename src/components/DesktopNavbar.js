import Link from "next/link";
import DesktopNavbarButton from "./DesktopNavbarButton";

export default function DesktopNavbar() {
  return (
    <nav className="border-b-2 border-y-slate-500 bg-neutral-950 px-1 py-2 text-white">
      <div className="container flex justify-between">
        <div className="flex flex-auto items-center justify-items-stretch">
          <Link className="mx-1 min-w-32 flex-grow" href="/">
            <DesktopNavbarButton title="Home" buttonColor="bg-homeButton" />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/about">
            <DesktopNavbarButton
              title="About"
              buttonColor="bg-aboutButton"
              buttonBackground="bg-aboutBackground"
              className="ml-4"
            />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/studies">
            <DesktopNavbarButton
              title="Studies"
              buttonColor="bg-studiesButton"
              buttonBackground="bg-studiesBackground"
              className="ml-4"
            />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/outreach">
            <DesktopNavbarButton
              title="Outreach"
              buttonColor="bg-outreachButton"
              buttonBackground="bg-outreachBackground"
              className="ml-4"
            />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/successes">
            <DesktopNavbarButton
              title="Successes"
              buttonColor="bg-successesButton"
              buttonBackground="bg-successesBackground"
              className="ml-4"
            />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/organizing">
            <DesktopNavbarButton
              title="Organizing"
              buttonColor="bg-organizingButton"
              buttonBackground="bg-organizingBackground"
              className="ml-4"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
