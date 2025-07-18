import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/app/outreach/page";

import Brochure from "@/components/Brochure";
import BrochureFig from "@/components/BrochureFig";

export const secondaryHierarchyProps = {
  buttonColor: "bg-outreachButton",
  buttonBackground: "bg-outreachBackground",
  titles: ["Newsletters"],
  path: "/outreach/newsletters",
};

export default function Brochures() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="pt-serif-700 p-8 text-center text-7xl text-[#c2ffbf] italic">
          Newsletters
        </div>
        <div id="printable-brochures">
          <div className="ml-1 flex">
            <Brochure
              title="Winter-Spring 1993 Newsletter"
              fileName="red-newsletter"
              description="Lundell/Hedges failure, school wet/dry pilot, Canadial consultant visits & rural centralized composting, & more"
              fileLabel={false}
            />
            <Brochure
              title="Summer 1993-Spring 1994 Newsletter"
              fileName="green-newsletter-inserts"
              description="Sevierville plant tour, Bordeaux visit, Gallatin meet, sludge, Tennessee Environmental Council, & more"
              fileLabel={false}
            />
          </div>
        </div>
        <div
          id="figures-list"
          className="roboto-font-400 rounded-6xl bg-opacity-70 m-6 bg-[#b8d1c8] px-6 pt-12 pb-16 text-2xl text-zinc-950"
        >
          <BrochureFig figureNumber="Fig-5" fileName="trommel.jpg" />
          <br></br>
          <BrochureFig figureNumber="Fig-6" fileName="ants.jpg" />
          <br></br>
          <BrochureFig figureNumber="Fig-7" fileName="gravel.jpg" />
          <br></br>
          <BrochureFig figureNumber="Fig-13" fileName="trash.jpg" />
          <br></br>
        </div>
      </div>
    </div>
  );
}
