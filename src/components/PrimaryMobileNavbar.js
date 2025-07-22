import Link from "next/link";
import PrimaryMobileNavbarButton from "./PrimaryMobileNavbarButton";

export default function PrimaryMobileNavbar() {
  return (
    <nav className="border-b-2 border-y-slate-500 bg-neutral-950 p-2 text-white">
      <div className="flex justify-center">
        <div className="grid w-full grid-cols-3">
          <Link href="/">
            <PrimaryMobileNavbarButton
              title="Home"
              buttonColor="bg-homeButton"
              buttonBackground="bg-aboutBackground"
            />
          </Link>
          <Link href="/about">
            <PrimaryMobileNavbarButton
              title="About"
              buttonColor="bg-aboutButton"
              buttonBackground="bg-aboutBackground"
            />
          </Link>
          <Link href="/studies">
            <PrimaryMobileNavbarButton
              title="Studies"
              buttonColor="bg-studiesButton"
              buttonBackground="bg-studiesBackground"
            />
          </Link>
          <Link href="/outreach">
            <PrimaryMobileNavbarButton
              title="Outreach"
              buttonColor="bg-outreachButton"
              buttonBackground="bg-outreachBackground"
            />
          </Link>
          <Link href="/successes">
            <PrimaryMobileNavbarButton
              title="Successes"
              buttonColor="bg-successesButton"
              buttonBackground="bg-successesBackground"
            />
          </Link>
          <Link href="/organizing">
            <PrimaryMobileNavbarButton
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
