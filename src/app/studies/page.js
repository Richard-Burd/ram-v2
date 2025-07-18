import Link from "next/link";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import PrimaryMastHead from "@/components/PrimaryMastHead";

export const primaryHierarchyProps = {
  buttonColor: "bg-studiesButton",
  buttonBackground: "bg-studiesBackground",
  titles: ["Zero-Waste", "Methodology", "Literature", "Travels", "Pilots"],
  path: "/studies",
  topMarginForEachHierarchyButton: `my-2.5`,
};

export default function Studies() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <PrimaryMastHead
        title="Studies"
        titleColor="text-[#f8ffbf]"
        subtitle="Travels, pilots"
        swooshColor="yellow"
        backgroundColor="studies-page-background-gradient"
        buttonsColor="bg-studiesButton"
        {...primaryHierarchyProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className="mx-8 max-w-screen-md pt-20 text-stone-200">
          <p className="mb-10 text-4xl font-semibold">
            This "Studies" page will have the following subsections:
          </p>
          <ul className="list-square mx-6 list-outside text-base sm:mx-10">
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="font-semibold text-blue-300 underline"
                href="/pilots"
              >
                Pilots
              </Link>
            </li>
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="font-semibold text-blue-300 underline"
                href="/travels"
              >
                Travels
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
