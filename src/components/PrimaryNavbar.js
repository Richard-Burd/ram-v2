import PrimaryDesktopNavbar from "./PrimaryDesktopNavbar";
import PrimaryMobileNavbar from "./PrimaryMobileNavbar";

export default function PrimaryNavbar() {
  return (
    <div>
      <div className="hidden lg:block">
        <PrimaryDesktopNavbar />
      </div>
      <div className="lg:hidden">
        <PrimaryMobileNavbar />
      </div>
    </div>
  );
}
