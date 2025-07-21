import Link from "next/link";
import MobileNavbarButton from "./MobileNavbarButton";

export default function MobileNavbar() {
  return (
    <nav className="border-b-2 border-y-slate-500 bg-neutral-950 px-1 py-2 text-white">
      <div className="flex justify-center">
        <div className="grid w-full grid-cols-3">
          <Link className="mx-1 min-w-32 flex-grow" href="/">
            <MobileNavbarButton title="Home" buttonColor="bg-homeButton" />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/about">
            <MobileNavbarButton
              title="About"
              buttonColor="bg-aboutButton"
              buttonBackground="bg-aboutBackground"
              className="ml-4"
            />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/studies">
            <MobileNavbarButton
              title="Studies"
              buttonColor="bg-studiesButton"
              buttonBackground="bg-studiesBackground"
              className="ml-4"
            />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/outreach">
            <MobileNavbarButton
              title="Outreach"
              buttonColor="bg-outreachButton"
              buttonBackground="bg-outreachBackground"
              className="ml-4"
            />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/successes">
            <MobileNavbarButton
              title="Successes"
              buttonColor="bg-successesButton"
              buttonBackground="bg-successesBackground"
              className="ml-4"
            />
          </Link>
          <Link className="mx-1 min-w-32 flex-grow" href="/organizing">
            <MobileNavbarButton
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
