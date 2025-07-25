import TextLink from "@/components/TextLink";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/app/successes/page";

export default function CurrentCampaigns() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#2d6ec2] to-[#173563] pb-16 text-zinc-300 md:from-[#225394] md:to-[#060e1a]">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="md:rounded-6xl m-5 rounded-3xl bg-neutral-950 p-4 md:m-11 md:p-8"
        >
          <div className="pt-serif-font-700 my-4 py-4 text-center text-5xl text-[#bfe6ff] italic">
            Current Campaigns
          </div>
          <div className="roboto-font-400 mx-0 text-lg md:mx-4 md:text-2xl">
            <p className="mb-8 text-lg md:text-2xl">
              First, <i>RAM</i> needs to maintain what it has proven good at --
              delivering solutions, as needs arise. Continue with two primary
              focuses that have worked so far:
            </p>
            <div className="mt-8 rounded-2xl bg-[#0f1e47] px-4 py-6 text-lg md:px-12 md:text-2xl">
              <ol className="mx-4 list-outside list-decimal md:mx-12">
                <li id="1" className="">
                  Figuring out -- and communicating -- how to{" "}
                  <b>minimize disposal</b>, the best way possible, in line with{" "}
                  <i>RAM&apos;s</i>{" "}
                  <TextLink
                    text="Mission Statement"
                    link="/about/mission-statement"
                  />{" "}
                  . Current website construction is part of this.
                </li>
                <li id="2" className="pt-3 pb-2">
                  Maintaining high-quality <b>talent management</b>, aimed at
                  best utilizing what becomes available, as efficiently,
                  humanely, and sustainably, as ever-limiting circumstances
                  allow. <i>RAM</i> has demonstrated this successfully enough
                  that it should share how to do it. Hint: Seek talent, which
                  foremost, has the following two characteristics:
                </li>
                <ol className="list-alpha-upper mx-12 list-outside">
                  <li id="A" className="">
                    having a focus on, and yearning for, <b>success</b>, and
                  </li>
                  <li id="B" className="pt-3 pb-2">
                    having the <b>work ethic</b> to make that happen.
                  </li>
                </ol>
              </ol>
            </div>

            <p className="mt-14 mb-4">
              As for current projects, one huge problem now begs for solutions:
              <i>Bad solid waste plans</i>. Citizens clamoring for zero-waste
              plans watch in horror as their governments waste tax money on the
              consulting industry's cockroach-like swarm of BS-spouting sales
              reps, touting dressed-up stock disposal industry-favoring plans as
              the best that can supposedly be done. Then they write op-eds about
              how zero-waste can't work.
            </p>
            <p>
              <i>RAM</i> has worked with both government and industry.{" "}
              <i>RAM&apos;s</i> current approach is to build a website that can
              explain the issue better than any before. Promote that. Then try
              other approaches. Evaluate. Adjust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
