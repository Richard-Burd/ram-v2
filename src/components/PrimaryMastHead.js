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
}) {
  return (
    <div>
      <div className="hidden lg:block">
        <PrimaryDesktopMastHead
          backgroundColor={backgroundColor}
          buttonsColor={buttonsColor}
          path={path}
          swooshColor={swooshColor}
          title={title}
          titles={titles}
          titleColor={titleColor}
        />
      </div>
      <div className="lg:hidden">
        <PrimaryMobileMastHead
          backgroundColor={backgroundColor}
          buttonsColor={buttonsColor}
          path={path}
          swooshColor={swooshColor}
          title={title}
          titles={titles}
          titleColor={titleColor}
        />
      </div>
    </div>
  );
}
