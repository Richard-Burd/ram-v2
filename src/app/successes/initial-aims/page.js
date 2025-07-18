import Link from "next/link";
import TextLink from "@/components/TextLink";

import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/app/successes/page";

export default function InitialAims() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#225394] to-[#060e1a] pb-16 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="rounded-6xl m-11 bg-neutral-950 p-8"
        >
          <div className="pt-serif-font-700 my-4 py-4 text-center text-5xl text-[#bfe6ff] italic">
            Initial Aims
          </div>
          <div className="roboto-font-400 mx-4 text-2xl">
            <p className="mb-8">
              Of the list of Successes on the{" "}
              <TextLink link="/successes/Brief-history" text="Brief History" />{" "}
              and{" "}
              <TextLink
                link="/successes/Longer-history"
                text="Longer History"
              />{" "}
              pages (both with identical numbering), only numbers 1, 2, 3, 9,
              and 12 were already being worked on -- and most of these just
              beginning to be -- when <i>RAM</i> was forming in late 1992.
              Those, and the other 18 successes, happened for two important
              reasons:
            </p>

            <p className="mb-8">
              First, as history unfolds, unanticipated needs arise.
            </p>

            <p className="mb-4">
              Second, <i>RAM</i> had prepared itself to be able to turn such
              needs into opportunities, and then deliver solutions. This
              preparation resulted from two primary focuses:
            </p>
            <div className="bg-opacity-30 m-4 rounded-2xl bg-[#0f1e47] px-2 py-4">
              <ol className="mx-12 list-outside list-decimal">
                <li id="1" className="">
                  <i>RAM</i> focused steadfastly on figuring out how to{" "}
                  <b>minimize disposal</b>, the best way possible, in line with
                  its Mission Statement.
                </li>
                <li id="2" className="pt-3 pb-2">
                  <i>RAM</i> focused on high-quality <b>talent management</b>,
                  aimed at best utilizing what became available, as efficiently,
                  humanely, and sustainably, as ever-limiting circumstances
                  would allow. It was the failure to do this, by other groups,
                  which led to the need for this. <i>RAM</i> did it well.
                </li>
              </ol>
            </div>

            <p className="mt-14 mb-4">
              Both of these two are interrelated. Perhaps the most important
              characteristics of those with high quality talent are:
            </p>
            <div className="bg-opacity-30 m-4 rounded-2xl bg-[#0f1e47] px-2 py-4">
              <ol className="list-alpha-upper mx-12 list-outside">
                <li id="A" className="">
                  having a focus on, and yearning for, <b>success</b>, and
                </li>
                <li id="B" className="pt-3 pb-2">
                  having the <b>work ethic</b> to make that happen.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
