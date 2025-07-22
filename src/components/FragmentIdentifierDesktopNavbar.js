import Link from "next/link";
import FragmentIdentifierDesktopNavbarButton from "./FragmentIdentifierDesktopNavbarButton";
import React from "react";

export default function FragmentIdentifierDesktopNavbar({
  buttonColor,
  buttonBackground,
  titles,
  path,
}) {
  return (
    <nav className="border-b-2 border-y-slate-500 bg-neutral-950 px-1 py-1">
      <div className="container flex justify-between">
        <div className="flex flex-auto flex-wrap items-center justify-items-stretch">
          {titles.map((title, index) => {
            let titleText = "";
            if (typeof title === "string") {
              titleText = title;
            } else if (React.isValidElement(title)) {
              titleText = title.props.children;
            }

            const hrefText =
              typeof titleText === "string"
                ? titleText.toLowerCase().replace(/ /g, "-")
                : `${title.props.children[0].props.children}`
                    .toString()
                    .toLowerCase()
                    .replace(/ /g, "-");

            return (
              <Link
                key={index}
                className="mx-1 my-1 min-w-32 flex-grow"
                // Internal Section Links (or Fragment Identifiers) "#"
                href={`${path}/#${hrefText}`}
              >
                <FragmentIdentifierDesktopNavbarButton
                  title={titleText}
                  buttonColor={buttonColor}
                  buttonBackground={buttonBackground}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
