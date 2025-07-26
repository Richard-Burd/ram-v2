import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/app/organizing/page";

// metadata
export const metadata = {
  title: "Legal",
  description: "Legal information for RAM",
};

export default function Legal() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#6824c6] to-[#271262] pb-72 text-zinc-300 md:from-[#591fab] md:to-[#160a36]">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="md:rounded-6xl m-4 rounded-3xl bg-neutral-950 p-3 md:m-11 md:p-6"
        >
          <div className="pt-serif-font-700 m-4 mt-8 p-4 text-center text-7xl text-[#d4bfff] italic">
            Legal
          </div>
          <div className="roboto-font-400 container mx-auto px-4">
            <div id="section-1" className="my-8 text-lg md:mx-8 md:text-2xl">
              <div className="title font-semibold underline">
                Annual Reports
              </div>
              <div className="paragraph">
                <p className="mb-3">
                  Some of <i>RAM&apos;s</i> Annual Reports, required by the
                  State of Tennessee, Secretary of State&apos;s office, Business
                  Division, every year, by May 1:
                </p>
              </div>
            </div>

            <div id="section-2" className="my-8 text-lg md:mx-8 md:text-2xl">
              <div className="title font-semibold underline">
                Tax information
              </div>
              <div className="paragraph">
                <p className="mb-3">
                  A table of some key metrics remains under development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
