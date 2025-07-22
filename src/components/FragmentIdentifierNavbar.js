import FragmentIdentifierDesktopNavbar from "./FragmentIdentifierDesktopNavbar";
import FragmentIdentifierMobileNavbar from "./FragmentIdentifierMobileNavbar";

export default function FragmentIdentifierNavbar({
  buttonColor,
  buttonBackground,
  titles,
  path,
}) {
  return (
    <div>
      <div className="hidden lg:block">
        <FragmentIdentifierDesktopNavbar
          buttonColor={buttonColor}
          buttonBackground={buttonBackground}
          titles={titles}
          path={path}
        />
      </div>
      <div className="lg:hidden">
        <FragmentIdentifierMobileNavbar
          buttonColor={buttonColor}
          buttonBackground={buttonBackground}
          titles={titles}
          path={path}
        />
      </div>
    </div>
  );
}
