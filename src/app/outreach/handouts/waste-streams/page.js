import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import Document from "@/components/Document";
import BrochureFig from "@/components/BrochureFig";
import { primaryHierarchyProps } from "@/app/outreach/page";
import { secondaryHierarchyProps } from "@/app/outreach/handouts/page";

export const tertiaryNavbarProps = {
  buttonColor: "bg-outreachButton",
  buttonBackground: "bg-outreachBackground",
  titles: ["2003", "2012", "2013", "2014", "2015", "2016"],
  path: "/outreach/handouts/waste-streams",
};

export default function WasteStreams() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <TertiaryNavbar {...secondaryHierarchyProps} />
      <FragmentIdentifierNavbar {...tertiaryNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="pt-serif-font-700 p-8 text-center text-7xl text-[#c2ffbf] italic">
          Waste Streams
        </div>
        <div
          id="comming-soon-placeholder"
          className="m-4 p-4 text-2xl text-zinc-200"
        >
          ...comming soon! This page is under construction.
        </div>
        <div
          id="items-list"
          className="m-4 p-4 text-2xl text-zinc-200 opacity-70"
        >
          <ul className="list-square m-4 list-outside p-4">
            <li className="mb-4">2003</li>
            <li className="mb-4">2012</li>
            <li className="mb-4">2013</li>
            <li className="mb-4">2014</li>
            <li className="mb-4">2015</li>
            <li className="mb-4">2016</li>
          </ul>
        </div>

        <div
          id="figures-list"
          className="roboto-font-400 rounded-6xl m-6 bg-neutral-950 px-6 pt-12 pb-16 text-2xl text-zinc-950"
        >
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-1.1"
            fileName="Fig-1.1.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-1.2"
            fileName="Fig-1.2.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-1.3"
            fileName="Fig-1.3.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-1.4"
            fileName="Fig-1.4.jpg"
          />
          <br></br>
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.1"
            fileName="Fig-14.1.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.2"
            fileName="Fig-14.2.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.3"
            fileName="Fig-14.3.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.4"
            fileName="Fig-14.4.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.5"
            fileName="Fig-14.5.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.6"
            fileName="Fig-14.6.jpg"
          />
        </div>

        <div id="documents-list" className="ml-20">
          <Document
            title="Solid Waste Destinations"
            fileName="doc-703"
            description="Trajectories patterened after Metro landfilling, audits, & sales taxes."
            fileLabel={true}
          />
          <Document
            title="Net Zero Landfilling"
            fileName="doc-36"
            description="What would happen to a typical waste stream."
            fileLabel={true}
          />
          <Document
            title="Household Hazardous Waste Collection Day"
            fileName="doc-299"
            description="June 1st, 1996."
            fileLabel={true}
          />
          <Document
            title="Solid Waste Stream Trends - September 6th, 2004"
            fileName="doc-318"
            description=""
            fileLabel={true}
          />
          <Document
            title="Solid Waste Stream Trends - July 23rd, 2006"
            fileName="doc-331"
            description=""
            fileLabel={true}
          />
          <Document
            title="2012 Davidson County Solid Waste - Where it went"
            fileName="doc-345"
            description=""
            fileLabel={true}
          />
          <Document
            title="Staten Island Ferry (All versions)"
            fileName="doc-702"
            description="This is a collection of all six version of this graphic"
            fileLabel={true}
          />
          <Document
            title="Creating a Level Playing Field"
            fileName="doc-687"
            description="Wet/dry recovery methods require up-front costs to government, but yeild far greater indirect benefits"
            fileLabel={true}
          />
        </div>
      </div>
    </div>
  );
}
