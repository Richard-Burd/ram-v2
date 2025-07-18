import SecondaryNavbar from "@/components/SecondaryNavbar";
import PrimaryMastHead from "@/components/PrimaryMastHead";

export const primaryHierarchyProps = {
  buttonColor: "bg-successesButton",
  buttonBackground: "bg-successesBackground",
  titles: [
    "Initial Aims",
    "Brief History",
    "Longer History",
    "Major Successes",
    "Current Campaigns",
  ],
  path: "/successes",
  topMarginForEachHierarchyButton: `my-2.5`,
};

export default function Successes() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <PrimaryMastHead
        title="Successes"
        titleColor="text-[#bfe6ff]"
        subtitle="Listed"
        swooshColor="blue"
        buttonsColor="bg-successesButton"
        buttonsBackground="bg-successesBackground"
        backgroundColor="successes-page-background-gradient"
        {...primaryHierarchyProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className="mx-8 max-w-screen-md pt-20 text-stone-200">
          <p className="mb-10 text-4xl font-semibold">
            This "Successes" page will have the following subsections:
          </p>
          <ul className="list-square mx-6 list-outside text-base sm:mx-10">
            <li className="pt-3 text-2xl">
              A page or subsection discussing the incinerator shutdown
            </li>
            <li className="pt-3 text-2xl">
              A page or subsection discussing other successes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
