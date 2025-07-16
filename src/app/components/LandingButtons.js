"use client";
import Link from "next/link";
import LandingButton from "./LandingButton";

export default function LandingButtons() {
  return (
    <div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/" passHref>
          <LandingButton
            title="Home"
            subTitle="This Page"
            buttonColor="bg-homeButton"
          />
        </Link>

        <Link href="/about" passHref>
          <LandingButton
            title="About"
            subTitle="Our History"
            buttonColor="bg-aboutButton"
          />
        </Link>

        <Link href="/studies" passHref>
          <LandingButton
            title="Studies"
            subTitle="Travels, pilots"
            buttonColor="bg-studiesButton"
          />
        </Link>

        <Link href="/outreach" passHref>
          <LandingButton
            title="Outreach"
            subTitle="Education, publications"
            buttonColor="bg-outreachButton"
          />
        </Link>

        <Link href="/successes" passHref>
          <LandingButton
            title="Successes"
            subTitle="Listed"
            buttonColor="bg-successesButton"
          />
        </Link>

        <Link href="/successes" passHref>
          <LandingButton
            title="Organizing"
            subTitle="Join us"
            buttonColor="bg-organizingButton"
          />
        </Link>
      </div>
    </div>
  );
}
