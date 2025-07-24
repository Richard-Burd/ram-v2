import PrimaryDesktopMastHead from "./PrimaryDesktopMastHead";
import PrimaryMobileMastHead from "./PrimaryMobileMastHead";

export default function PrimaryMastHead({
  title,
  titles,
  titleColor,
  // subtitle, // currently not used
  swooshColor,
  backgroundColor,
  buttonsColor,
  path,
  topMarginForEachHierarchyButton,
}) {
  return (
    <div>
      <div className="hidden lg:block">
        <PrimaryDesktopMastHead
          title={title}
          titles={titles}
          titleColor={titleColor}
          swooshColor={swooshColor}
          backgroundColor={backgroundColor}
          buttonsColor={buttonsColor}
        />
      </div>
      <div className="lg:hidden">
        <PrimaryMobileMastHead
          title={title}
          titles={titles}
          titleColor={titleColor}
          swooshColor={swooshColor}
          backgroundColor={backgroundColor}
          buttonsColor={buttonsColor}
        />
      </div>
    </div>
  );
}
