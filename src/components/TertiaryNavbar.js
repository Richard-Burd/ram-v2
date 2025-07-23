import TertiaryDesktopNavbar from "./TertiaryDesktopNavbar";
import TertiaryMobileNavbar from "./TertiaryMobileNavbar";

export default function TertiaryNavbar({
  buttonColor,
  buttonBackground,
  titles,
  path,
}) {
  return (
    <div>
      <div className="hidden lg:block">
        <TertiaryDesktopNavbar
          buttonColor={buttonColor}
          buttonBackground={buttonBackground}
          titles={titles}
          path={path}
        />
      </div>
      <div className="lg:hidden">
        <TertiaryMobileNavbar
          buttonColor={buttonColor}
          buttonBackground={buttonBackground}
          titles={titles}
          path={path}
        />
      </div>
    </div>
  );
}
