import SecondaryNavbar from "@/components/SecondaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { primaryHierarchyProps } from "@/app/organizing/page";

export const secondaryHierarchyProps = {
  buttonColor: "bg-organizingButton",
  buttonBackground: "bg-organizingBackground",
  titles: ["RAM Meetings", "Coalition Meetings", "Documents for these"],
  path: "/organizing/meetings",
};

// metadata
export const metadata = {
  title: "Meetings",
  description: "Meetings information for RAM",
  keywords: "team, cohort, leadership, about us, people, persons",
};

export default function Contacts() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] pb-72 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <FragmentIdentifierNavbar {...secondaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="rounded-6xl m-11 bg-neutral-950 p-6"
        >
          <div className="pt-serif-font-700 m-4 mt-8 p-4 text-center text-7xl text-[#d4bfff] italic">
            Meetings
          </div>
          <div className="roboto-font-400 container mx-auto px-4">
            <div id="ram" className="mx-8 my-8 text-2xl">
              <div className="title font-semibold underline">
                <i>RAM</i> Meeting Locations to date
              </div>
              <div className="paragraph">
                <p className="mb-3">
                  <i>RAM</i> thanks the following:
                </p>
                <p className="mb-3">
                  Northwest YMCA&apos;s board room, Davidson County, Council
                  District 2
                </p>
                <p className="mb-3">
                  Volunteer State Community College&apos;s cafeteria, Sumner
                  County
                </p>
                <p className="mb-3">
                  The Re-Use Center&apos;s meeting room, Davidson County,
                  Council District 17
                </p>
                <p className="mb-3">
                  John van der Harst&apos;s apartment, Davidson County, Council
                  District 6
                </p>
                <p className="mb-3">
                  Anna Haislip&apos;s house, Davidson County, Council District
                  16
                </p>
                <p className="mb-3">
                  Karen Cisler&apos;s apartment, Davidson County, Council
                  District 13
                </p>
                <p className="mb-3">
                  Leslie Allen&apos;s house, Davidson County, Council District 7
                </p>
                <p className="mb-3">
                  Jeff Brousal&apos;s house, Davidson County, Council District 9
                </p>
                <p className="mb-3">
                  Make Nashville&apos;s meeting room, Davidson County, Council
                  District 6
                </p>
                <p className="mb-3">
                  The Y&apos;s Art Embrace studio space, Davidson County,
                  Council District 6
                </p>
                <p className="mb-3">
                  Eddie Carpenter&apos;s house, Davidson County, Council
                  District 5
                </p>
              </div>
            </div>
            <div id="coalition-meetings" className="mx-8 my-14 text-2xl">
              <div className="title font-semibold underline">
                Meeting locations for Coalitions RAM was a part of
              </div>
              <div className="paragraph">
                <p className="mb-3">
                  <i>RAM</i> thanks the following:
                </p>
                <p className="mb-3">
                  Vanderbilt University&apos;s Center for Center for Health
                  Services, Davidson County, Council District 18 -- organized by
                  SOCM (Save Our Cumberland Mountains)
                </p>
                <p className="mb-3">
                  Steiner-Liff Iron & Metal Co.&apos;s meeting room, Davidson
                  County, Council District 6 -- lrganized by Steiner Liff&apos;s
                  Noah Liff, Mitch Magid, and Skila Harris
                </p>
                <p className="mb-3">
                  Leith Patton&apos;s home&apos;s rear deck, Davidson County,
                  Council District 18 -- organized by <i>RAM</i>
                </p>
                <p className="mb-3">
                  Nashville Peace and Justice Center, Davidson County, Council
                  District 18 -- organized by <i>RAM</i>
                </p>
                <p className="mb-3">
                  Nashville Greenlands&apos; living room and front porch,
                  Davidson County, Council District 21 -- organized by Karl
                  Meyer
                </p>
                <p className="mb-3">
                  The Y-Cap&apos;s meeting room, Davidson County, Council
                  District 6 -- organized by Chris McCarthy
                </p>
              </div>
            </div>
            <div id="documents-for-these" className="mx-8 my-14 text-2xl">
              <div className="title font-semibold underline">
                Documents related to these meetings
              </div>
              <div className="paragraph">
                <p className="mb-3">
                  Agendas and minutes/sign-in sheets, where applicable:
                </p>
                <p className="mb-3">
                  Images for these are expected to appear here soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
