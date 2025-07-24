import SecondaryDesktopMastHead from "./SecondaryDesktopMastHead";
import SecondaryMobileMastHead from "./SecondaryMobileMastHead";

export default function SecondaryMastHead({
  title,
  description,
  titles,
  titleColor,
  buttonsColor,
  path,
}) {
  return (
    <div>
      <div className="hidden lg:block">
        <SecondaryDesktopMastHead
          buttonsColor={buttonsColor}
          description={description}
          path={path}
          title={title}
          titles={titles}
          titleColor={titleColor}
        />
      </div>
      <div className="lg:hidden">
        <SecondaryMobileMastHead
          buttonsColor={buttonsColor}
          description={description}
          path={path}
          title={title}
          titles={titles}
          titleColor={titleColor}
        />
      </div>
    </div>
  );
}
