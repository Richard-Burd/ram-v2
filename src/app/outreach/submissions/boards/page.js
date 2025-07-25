import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { primaryHierarchyProps } from "@/app/outreach/page";
import { secondaryHierarchyProps } from "@/app/outreach/submissions/page";

export const thisNavbarProps = {
  buttonColor: "bg-outreachButton",
  buttonBackground: "bg-outreachBackground",
  titles: [
    "Tennessee Solid Waste Disposal Control Board",
    "Davison County Solid Waste Region Board",
  ],
  path: "/outreach/submissions/boards",
};

export default function Boards() {
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
            Boards
          </div>

          <div
            id="tennessee-solid-waste-disposal-control-board"
            className="mx-0 mb-24 pt-4 text-zinc-200 md:mx-8"
          >
            <div className="mt-2 mb-2 border-b-2 border-zinc-300 pb-1 text-2xl font-bold md:text-4xl">
              Tennessee Solid Waste Disposal Control Board
            </div>
            <div className="text-lg md:text-2xl">
              <p className="mb-8">
                Interpretation of statutes by the Tennessee Solid Waste Disposal
                Control Board. Submitted to the State of Tennessee, Office of
                the Attorney General. 2 pages, March 1993.
              </p>
              <p className="mb-8">
                Arguments for permittance by Order instead of by Rule for
                beneficial reuse of treated municipal waste combustor ash.
                Submitted to the Tennessee Solid Waste Disposal Control Board. 1
                page, July 1996.
              </p>
            </div>
          </div>

          <div
            id="davison-county-solid-waste-region-board"
            className="mx-0 mb-24 pt-4 text-zinc-200 md:mx-8"
          >
            <div className="mt-2 mb-2 border-b-2 border-zinc-300 pb-1 text-2xl font-bold md:text-4xl">
              Davison County Solid Waste Region Board
            </div>
            <div className="text-lg md:text-2xl">
              <p className="mb-8">
                Formulation of the Region's 10-year plan. Submitted to the
                Davidson County Solid Waste Region Board, as a member of the
                Board's Advisory Committee. 10 pages total, April 1993,
                September 1993, and November 1993.
              </p>
            </div>
          </div>

          {/* <div
          id="comming-soon-placeholder"
          className="m-4 p-4 text-2xl text-zinc-200"
        >
          ...comming soon! This page is under construction.
        </div>
        <div
          id="items-list"
          className="m-4 p-4 text-2xl text-zinc-200 opacity-70"
        >
          <table className="m-4">
            <tbody>
              <tr id="row-1">
                <td className="column-1 w-full whitespace-normal pb-4 align-top">
                  Tennessee Solid Waste Disposal Control Board
                </td>
                <td className="column-2 w-full whitespace-normal pb-4 align-top">
                  2 + 1 pages
                </td>
              </tr>
              <tr id="row-2">
                <td className="column-1 pb-4 pr-3 align-top">
                  Davison County Solid Waste Region Board
                </td>
                <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                  10 pages &nbsp;&nbsp;&nbsp;&nbsp;
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
        </div>
      </div>
    </div>
  );
}
