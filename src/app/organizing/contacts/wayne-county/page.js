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
      <div className="bg-gradient-to-l from-[#6824c6] to-[#271262] pb-4 text-zinc-300 md:from-[#591fab] md:to-[#160a36]">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <TertiaryNavbar {...secondaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="md:rounded-6xl m-4 rounded-3xl bg-neutral-950 p-3 md:m-11 md:p-6"
        >
          <div className="pt-serif-font-700 m-4 p-4 text-center text-4xl text-[#d4bfff] italic md:text-7xl">
            Colleen McLanaghan
          </div>
          <div className="border-b-2 border-zinc-700 pt-6"></div>

          <div className="text-set mx-0 pb-8 md:mx-4 md:mr-80 md:ml-0">
            <div className="address-set text-lg tracking-wide md:text-2xl">
              <div>
                To minimize resource consumption, including time, please send
                only respectful, personal communication to:
              </div>{" "}
              <br></br>
              <div>
                <b>Mailing Address</b>:{" "}
              </div>
              <div className="mt-4 ml-6 inline-block max-w-max rounded-2xl bg-[#211052] p-4 md:rounded-3xl">
                <div>Colleen McLanaghan</div>
                <div>3340 J. B. Pigg Rd.</div>
                <div>Cypress Inn, TN 38452</div>
                <div>931-724-5495</div>
              </div>
              <div className="mt-20">
                <b>Telephone</b>, preferably as close as possible to 9:00-11:00
                pm Central U.S. time (CST):
              </div>
              <div className="mt-4 ml-6 inline-block max-w-max rounded-2xl bg-[#211052] p-4 md:rounded-3xl">
                <div>931-232-7777</div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
