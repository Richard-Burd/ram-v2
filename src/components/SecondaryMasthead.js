import SecondaryDesktopMastHead from "./SecondaryDesktopMastHead";
import SecondaryMobileMastHead from "./SecondaryMobileMastHead";

export default function SecondaryMastHead({
  title,
  description,
  titles,
  titleColor,
  buttonsColor,
}) {
  return (
    <div>
      <div className="hidden lg:block">
        <SecondaryDesktopMastHead
          title={title}
          description={description}
          titles={titles}
          titleColor={titleColor}
          buttonsColor={buttonsColor}
        />
      </div>
      <div className="lg:hidden">
        <SecondaryMobileMastHead
          title={title}
          description={description}
          titles={titles}
          titleColor={titleColor}
          buttonsColor={buttonsColor}
        />
      </div>
    </div>
  );
}
