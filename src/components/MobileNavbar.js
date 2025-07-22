import Link from "next/link";
import MobileNavbarButton from "./MobileNavbarButton";

export default function MobileNavbar() {
  return (
    <nav className="border-b-2 border-y-slate-500 bg-neutral-950 text-white">
      <div className="flex justify-center">
        <div className="grid w-full grid-cols-3">
          <Link href="/">
            <MobileNavbarButton
              title="Home"
              buttonColor="bg-homeButton"
              buttonBackground="bg-aboutBackground"
            />
          </Link>
          <Link href="/about">
            <MobileNavbarButton
              title="About"
              buttonColor="bg-aboutButton"
              buttonBackground="bg-aboutBackground"
            />
          </Link>
          <Link href="/studies">
            <MobileNavbarButton
              title="Studies"
              buttonColor="bg-studiesButton"
              buttonBackground="bg-studiesBackground"
            />
          </Link>
          <Link href="/outreach">
            <MobileNavbarButton
              title="Outreach"
              buttonColor="bg-outreachButton"
              buttonBackground="bg-outreachBackground"
            />
          </Link>
          <Link href="/successes">
            <MobileNavbarButton
              title="Successes"
              buttonColor="bg-successesButton"
              buttonBackground="bg-successesBackground"
            />
          </Link>
          <Link href="/organizing">
            <MobileNavbarButton
              title="Organiz'g"
              buttonColor="bg-organizingButton"
              buttonBackground="bg-organizingBackground"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
