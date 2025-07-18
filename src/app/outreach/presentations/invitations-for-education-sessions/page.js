import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { primaryHierarchyProps } from "@/app/outreach/page";
import { secondaryHierarchyProps } from "@/app/outreach/presentations/page";
import Document from "@/components/Document";

export default function InvitationsForEducationSessions() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <TertiaryNavbar {...secondaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="rounded-6xl m-11 bg-neutral-950 p-8"
        >
          <div className="pt-serif-700 p-8 text-center text-7xl text-[#c2ffbf] italic">
            Invitations for Education Sessions
          </div>

          <Document
            title="Invitations for Education Sessions"
            fileName="doc-706"
            description=""
            fileLabel={true}
          />
        </div>
      </div>
    </div>
  );
}
