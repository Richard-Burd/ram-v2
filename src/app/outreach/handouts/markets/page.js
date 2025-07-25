import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import BrochureFig from "@/components/BrochureFig";
import Document from "@/components/Document";
import { primaryHierarchyProps } from "@/app/outreach/page";
import { secondaryHierarchyProps } from "@/app/outreach/handouts/page";

export default function Markets() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <TertiaryNavbar {...secondaryHierarchyProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="pt-serif-font-700 p-8 text-center text-7xl text-[#c2ffbf] italic">
          Markets
        </div>

        <div id="handouts-list" className="ml-0 md:ml-20">
          <Document
            title="Remanufacturing Example"
            fileName="doc-689"
            description="Making toilet paper"
            fileLabel={true}
          />
        </div>

        <div
          id="comming-soon-placeholder"
          className="m-4 p-4 text-2xl text-zinc-200"
        >
          ...comming soon! This page is under construction.
        </div>
        <div
          id="figures-list"
          className="roboto-font-400 rounded-6xl m-6 bg-neutral-950 px-6 pt-12 pb-16 text-2xl text-zinc-950"
        >
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-21"
            fileName="heavy-molded.2.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-20"
            fileName="heavy-molded.1.jpg"
          />
          <br></br>
          <BrochureFig
            figureNumber="Fig-23"
            borderColor="#496649"
            fileName="re-manufacture.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-24"
            fileName="solid-waste-choices.jpg"
          />
          <br></br>
        </div>
      </div>
    </div>
  );
}
