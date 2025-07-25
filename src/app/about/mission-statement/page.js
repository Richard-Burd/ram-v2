import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/app/about/page";

export default function MissionStatement() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#873f08] to-[#1a0c02] pb-72 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="md:rounded-6xl m-4 rounded-3xl bg-neutral-950 p-0 md:m-11 md:p-8"
        >
          <div className="pt-serif-font-700 m-0 p-4 text-center text-4xl text-[#ffe9bf] italic md:m-4 md:text-7xl">
            Mission Statement
          </div>
          <div className="roboto-font-400 m-0 p-4 text-lg md:m-4 md:text-2xl">
            <i>RAM</i> is a research and education-based group of citizens which
            advocates for the development of recycling techniques which foster
            industrial improvement, new jobs, prosperity, awareness, health, a
            cleaner environment, and the elimination of landfilling.
          </div>
        </div>
      </div>
    </div>
  );
}
