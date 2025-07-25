import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { primaryHierarchyProps } from "@/app/outreach/page";
import { secondaryHierarchyProps } from "@/app/outreach/submissions/page";

export const thisNavbarProps = {
  buttonColor: "bg-outreachButton",
  buttonBackground: "bg-outreachBackground",
  titles: [
    "Nashville Thermal Transfer Corp.",
    "Governor's Office, State of Tennessee",
    "Support",
    "Research",
  ],
  path: "/outreach/submissions/general",
};

export default function General() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#0bb931] to-[#075818] pb-72 md:from-[#088723] md:to-[#021a07]">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <TertiaryNavbar {...secondaryHierarchyProps} />
        <FragmentIdentifierNavbar {...thisNavbarProps} />
        <div
          id="title-and-text-box"
          className="md:rounded-6xl m-5 rounded-3xl bg-neutral-950 p-4 md:m-11 md:p-8"
        >
          <div className="pt-serif-font-700 my-4 py-4 text-center text-5xl text-[#c2ffbf] italic md:text-6xl">
            General
          </div>

          <div
            id="comming-soon-placeholder"
            className="m-4 p-4 text-2xl text-zinc-200"
          >
            ...comming soon! This page is under construction.
          </div>

          <div id="main-body" className="text-zinc-200">
            <div
              id="nashville-thermal-transfer-corp."
              className="mx-0 mb-24 pt-4 text-zinc-200 md:mx-8"
            >
              <div className="mt-2 mb-2 border-b-2 border-zinc-300 pb-1 text-2xl font-bold md:text-4xl">
                Nashville Thermal Transfer Corp.
              </div>
              <div className="text-lg md:text-2xl">
                <p className="mb-8">
                  A countywide cost/benefit analysis of converting a WTE
                  incinerator managed by the Nashville Thermal Transfer Corp. to
                  a natural gas-fired cogeneration system, and using all refuse
                  otherwise burned to produce solid products or compost.
                  Included maximum subsidies necessary to assure local
                  development of all industries in question, and that the
                  products of these industries would be cost-competitive. Widely
                  distributed. 2 pages (8 1/2" x 14"), November 1993.
                </p>
              </div>
            </div>

            <div
              id="governor's-office,-state-of-tennessee"
              className="mx-0 mb-24 pt-4 text-zinc-200 md:mx-8"
            >
              <div className="mt-2 mb-2 border-b-2 border-zinc-300 pb-1 text-2xl font-bold md:text-4xl">
                Governor's Office, State of Tennessee
              </div>
              <div className="text-lg md:text-2xl">
                <p className="mb-8">
                  A funding and procedural blueprint for eliminating nearly all
                  solid waste disposal on a statewide basis, in response to a
                  request by an incoming-to-be gubernatorial staff person.
                  Submitted to Mark Rogers. 7 pages, October 1994.
                </p>
              </div>
            </div>

            <div id="support" className="mx-0 mb-24 pt-4 text-zinc-200 md:mx-8">
              <div className="mt-2 mb-2 border-b-2 border-zinc-300 pb-1 text-2xl font-bold md:text-4xl">
                Support
              </div>
              <div className="text-lg md:text-2xl">
                <p className="mb-8">
                  11 persons deserving support. Response to request. Submitted
                  to Harold L. Stokes, Redford, Michigan. 1 page, January 1998.
                </p>
              </div>
            </div>

            <div
              id="research"
              className="mx-0 mb-24 pt-4 text-zinc-200 md:mx-8"
            >
              <div className="mt-2 mb-2 border-b-2 border-zinc-300 pb-1 text-2xl font-bold md:text-4xl">
                Research
              </div>
              <div className="text-lg md:text-2xl">
                <p className="mb-8">
                  Additional research needed. Response to Air, Soil, and Water
                  Pollution: Environmental Health Implications, town meeting
                  presentation at Vanderbilt University's Peabody College.
                  Submitted to Kenneth Olden, Director, National Institute of
                  Environmental Health Sciences, c/o Rocio Harrelson, Center in
                  Molecular Toxicology, Vanderbilt University School of
                  Medicine. 2 pages, November 1998.
                </p>
                <p className="mb-8">
                  Survey. Information & Communication Technologies Effect on
                  Grassroots Groups. Supplied contact information for numerous
                  groups. These later proved comparatively highly responsive.
                  Submitted to Dawn R. Vignola, The George Washington
                  University, Political Science Dept. 9 pages, 1999.
                </p>
              </div>
            </div>

            <div
              id="items-list"
              className="m-4 p-4 text-lg text-zinc-200 opacity-70 md:text-2xl"
            >
              <ul className="list-square m-0 list-outside p-4 md:m-4">
                <li className="mb-4">
                  A 2-page (8 1/2 x 14) 5-scenario economic comparison of
                  options related to incineration, 10/93. To see what it looks
                  like, see a reduced size version on p. 18 of RAM's second
                  newsletter.
                </li>
                <li className="mb-4">
                  A 7-page letter to Mark Rogers (Governor's Office), dated
                  10/10/94.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
