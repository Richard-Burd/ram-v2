import SecondaryNavbar from "@/components/SecondaryNavbar";
import PrimaryMastHead from "@/components/PrimaryMastHead";

export const primaryHierarchyProps = {
  buttonColor: "bg-outreachButton",
  buttonBackground: "bg-outreachBackground",
  titles: [
    "Presentations",
    "Brochures",
    "Newsletters",
    "Handouts",
    "Submissions",
  ],
  path: "/outreach",
  topMarginForEachHierarchyButton: `my-2.5`,
};

export default function Outreach() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <PrimaryMastHead
        title="Outreach"
        titleColor="text-[#c2ffbf]"
        subtitle="Education, publications"
        swooshColor="green"
        buttonsColor="bg-outreachButton"
        backgroundColor="outreach-page-background-gradient"
        {...primaryHierarchyProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className="mx-8 max-w-screen-md pt-20 text-stone-200">
          <p className="mb-10 text-4xl font-semibold">
            This "Outreach" page is under development.
          </p>
        </div>
      </div>
    </div>
  );
}
