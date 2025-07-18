import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { secondaryHierarchyProps } from "@/app/organizing/contacts/page";
import { primaryHierarchyProps } from "@/app/organizing/page";

// metadata
export const metadata = {
  title: "Colleen McLanaghan",
  description: "Colleen McLanaghan information for RAM",
  keywords: "contact, address, email, outreach, leadership",
};
export default function Colleen() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] pb-72 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <TertiaryNavbar {...secondaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="rounded-6xl m-11 bg-neutral-950 p-6"
        >
          <div className="pt-serif-font-700 m-4 p-4 text-center text-7xl text-[#d4bfff] italic">
            Colleen McLanaghan
          </div>
          <div className="border-b-2 border-zinc-700 pt-6"></div>
          <div>
            <div className="text-set mx-4 pb-80 md:mr-80 md:ml-0">
              <div className="address-set text-2xl tracking-wide">
                <div>
                  To minimize resource consumption, including time, please send
                  only respectful, personal communication to:
                </div>{" "}
                <br></br>
                <div>
                  <b>Mailing Address</b>:{" "}
                </div>
                <div className="mt-4 ml-6 inline-block max-w-max rounded-3xl bg-[#211052] p-4">
                  <div>Colleen McLanaghan</div>
                  <div>3340 J. B. Pigg Rd.</div>
                  <div>Cypress Inn, TN 38452</div>
                  <div>U.S.A.</div>
                </div>
                <div className="mt-20">
                  <b>Telephone</b>, preferably as close as possible to
                  9:00-11:00 pm Central U.S. time (CST):
                </div>
                <div className="mt-4 ml-6 inline-block max-w-max rounded-3xl bg-[#211052] p-4">
                  <div>931-724-5495</div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
