import SecondaryDesktopNavbar from "./SecondaryDesktopNavbar";
import SecondaryMobileNavbar from "./SecondaryMobileNavbar";

export default function PrimaryNavbar({
  buttonColor,
  buttonBackground,
  titles,
  path,
}) {
  return (
    <div>
      <div className="hidden lg:block">
        <SecondaryDesktopNavbar
          buttonColor={buttonColor}
          buttonBackground={buttonBackground}
          titles={titles}
          path={path}
        />
      </div>
      <div className="lg:hidden">
        <SecondaryMobileNavbar
          buttonColor={buttonColor}
          buttonBackground={buttonBackground}
          titles={titles}
          path={path}
        />
      </div>
    </div>
  );
}
