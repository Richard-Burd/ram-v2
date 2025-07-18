import Link from "next/link";

export default function TextLink({ text, link }) {
  return (
    <>
      <Link
        // an href beginning with "http" is a hyperlink (external website)
        // an href beginning with "/" is an anchor link (internal to this website)
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-300 transition duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline"
      >
        <strong>{text}</strong>
      </Link>
    </>
  );
}
