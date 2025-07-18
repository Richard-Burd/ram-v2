import Figure from "@/components/Figure";
import Document from "@/components/Document";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import PrimaryMastHead from "@/components/PrimaryMastHead";

export const metadata = {
  title: "About RAM",
  description:
    "Learn about RAM's mission to improve recycling practices and environmental health.",
};

export const primaryHierarchyProps = {
  buttonColor: "bg-aboutButton",
  buttonBackground: "bg-aboutBackground",
  titles: ["Mission Statement", "Brief History", "Longer History", "Bios"],
  path: "/about",
  topMarginForEachHierarchyButton: `mt-7`,
};

export default function About() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <PrimaryMastHead
        title="About Us"
        titleColor="text-[#ffe9bf]"
        subtitle="Our History"
        swooshColor="orange"
        backgroundColor="about-page-background-gradient"
        buttonsColor="bg-aboutButton" //"bg-[#ffd28a]"
        {...primaryHierarchyProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className="mx-8 max-w-screen-md pt-20 text-stone-200">
          <p className="mb-10 text-4xl font-semibold">
            This "About" page will have the following items:
          </p>
          <ul className="list-square mx-6 list-outside text-base sm:mx-10">
            <li className="pt-3 text-2xl">List of Donors</li>
            <ul>
              <li>- Ron McNutt, Davidson County</li>
              <li>- Ethel Spiller, Davidson County</li>
              <li>- Sandy Loyd, Davidson County</li>
              <li>- Dan Sweeton, Davidson County</li>
            </ul>
          </ul>
        </div>
        <Figure
          title="Metro Gov't of Nashville & Davidson County"
          fileName="fig-1"
          description="Circa 2015, Council members, mayor, scale annd other details"
          fileLabel={true}
        />

        <Document
          title="Jefferson County Solid Waste Management District Board"
          fileName="doc-2"
          description="Attendees: Elgin Crull, Fred Banks, Joyce St. Clain, et. al. This is a rambling sentence that will let us see what a longer description would look like for a particular document."
          fileLabel={true}
        />
      </div>
    </div>
  );
}
