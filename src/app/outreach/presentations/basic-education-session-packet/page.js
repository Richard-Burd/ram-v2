import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { primaryHierarchyProps } from "@/app/outreach/page";
import { secondaryHierarchyProps } from "@/app/outreach/presentations/page";
import Document from "@/components/Document";

export default function BasicEducationSessionPacket() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#0aa32b] to-[#075c1a] pb-4 md:from-[#088723] md:to-[#021a07]">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <TertiaryNavbar {...secondaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="md:rounded-6xl m-4 rounded-3xl bg-neutral-950 p-8 md:m-11"
        >
          <div className="pt-serif-font-700 p-8 text-center text-5xl text-[#c2ffbf] italic md:text-7xl">
            Basic Education Session Packet
          </div>

          <Document
            title="Basic Education Session Packet"
            fileName="doc-705"
            description=""
            fileLabel={true}
          />
        </div>
      </div>
    </div>
  );
}
