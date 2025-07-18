import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/app/organizing/page";
import SocialMediaIcon from "@/components/SocialMediaIcon";

const socialMediaIconProps = {
  icon: "home",
  backgroundColor: `#5f36b3`,
  activeBackgroundColor: `#ad9eff`,
};

// metadata
export const metadata = {
  title: "Membership",
  description: "Membership information for RAM",
  keywords: "team, cohort, leadership, about us, people, persons",
};

export default function Membership() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] pb-72 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="rounded-6xl m-11 bg-neutral-950 p-6"
        >
          <div className="pt-serif-font-700 m-4 mt-8 p-4 text-center text-7xl text-[#d4bfff] italic">
            Membership
          </div>
          <div className="roboto-font-400 flex justify-between px-4">
            <div id="section-1" className="mx-8 my-8 text-2xl">
              <div className="flex-1">
                <div className="title font-semibold underline">
                  Nashville Peace and Justice Center
                </div>
                <div className="paragraph">
                  <p className="mb-3">2010 and 2012-2023.</p>
                </div>
              </div>
              <div className="flex-1">
                <SocialMediaIcon
                  hyperLink="https://www.nashvillepeacejustice.org/"
                  {...socialMediaIconProps}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
