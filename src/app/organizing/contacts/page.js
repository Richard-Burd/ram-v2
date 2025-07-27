import SecondaryNavbar from "@/components/SecondaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import { primaryHierarchyProps } from "@/app/organizing/page";

const socialMediaIconProps = {
  icon: "email",
  backgroundColor: `#5f36b3`,
  activeBackgroundColor: `#ad9eff`,
};

export const secondaryHierarchyProps = {
  buttonColor: "bg-organizingButton",
  buttonBackground: "bg-organizingBackground",
  titles: [
    "Davidson County",
    "Jackson County",
    "Stewart County",
    "Wayne County",
    "Washington County",
  ],
  path: "/organizing/contacts",
};

// metadata
export const metadata = {
  title: "Contacts",
  description: "Contacts information for RAM",
  keywords: "team, cohort, leadership, about us, people, persons",
};

export default function Contacts() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#6824c6] to-[#271262] pb-72 text-zinc-300 md:from-[#591fab] md:to-[#160a36]">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <FragmentIdentifierNavbar {...secondaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="md:rounded-6xl m-4 rounded-3xl bg-neutral-950 p-3 md:m-11 md:p-6"
        >
          <div className="pt-serif-font-700 m-4 p-4 pb-12 text-center text-5xl text-[#d4bfff] italic md:text-7xl">
            Contacts
          </div>
          <div id="desktop-container" className="hidden lg:block">
            <table className="px-4">
              <tbody className="text-2xl">
                <tr id="davidson-county">
                  <td className="pb-16 text-left font-bold">Davidson County</td>
                  <td className="pb-16 pl-12 text-left">John van der Harst</td>
                  <td className="ml-9 pb-16 pl-20">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/davidson-county"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="jackson-county">
                  <td className="pb-16 text-left font-bold">Jackson County</td>
                  <td className="pb-16 pl-12 text-left">Leith Patton</td>
                  <td className="ml-9 pb-16 pl-20">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/jackson-county"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="stewart-county">
                  <td className="pb-16 text-left font-bold">Stewart County</td>
                  <td className="pb-16 pl-12 text-left">Martha Yanchyshyn</td>
                  <td className="ml-9 pb-16 pl-20">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/stewart-county"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="wayne-county">
                  <td className="pb-16 text-left font-bold">Wayne County</td>
                  <td className="pb-16 pl-12 text-left">Colleen McLanaghan</td>
                  <td className="ml-9 pb-16 pl-20">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/wayne-county"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="washington-county">
                  <td className="pb-16 text-left font-bold">
                    Washington County
                  </td>
                  <td className="pb-16 pl-12 text-left">Catherine Murray</td>
                  <td className="ml-9 pb-16 pl-20">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/washington-county"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="mobile-container" className="lg:hidden">
            <div id="john-van-der-harst" className="text-center">
              <div className="text-2xl font-bold">Davidson County</div>
              <div className="mb-3 text-xl">John van der Harst</div>
              <div className="flex justify-center">
                <SocialMediaIcon
                  anchorLink="/organizing/contacts/davidson-county"
                  {...socialMediaIconProps}
                />
              </div>
            </div>
            <div id="leith-patton" className="mt-8 text-center">
              <div className="text-2xl font-bold">Jackson County</div>
              <div className="mb-3 text-xl">Leith Patton</div>
              <div className="flex justify-center">
                <SocialMediaIcon
                  anchorLink="/organizing/contacts/jackson-county"
                  {...socialMediaIconProps}
                />
              </div>
            </div>
            <div id="martha-yanchyshyn" className="mt-8 text-center">
              <div className="text-2xl font-bold">Stewart County</div>
              <div className="mb-3 text-xl">Martha Yanchyshyn</div>
              <div className="flex justify-center">
                <SocialMediaIcon
                  anchorLink="/organizing/contacts/stewart-county"
                  {...socialMediaIconProps}
                />
              </div>
            </div>
            <div id="colleen-mclanaghan" className="mt-8 text-center">
              <div className="text-2xl font-bold">Wayne County</div>
              <div className="mb-3 text-xl">Colleen McLanaghan</div>
              <div className="flex justify-center">
                <SocialMediaIcon
                  anchorLink="/organizing/contacts/wayne-county"
                  {...socialMediaIconProps}
                />
              </div>
            </div>
            <div id="catherine-murray" className="mt-8 text-center">
              <div className="text-2xl font-bold">Washington County</div>
              <div className="mb-3 text-xl">Catherine Murray</div>
              <div className="flex justify-center">
                <SocialMediaIcon
                  anchorLink="/organizing/contacts/washington-county"
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
