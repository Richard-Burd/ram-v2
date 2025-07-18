import Link from "next/link";

export default function LibrarycardCatalog({ fileName, leeTitle = "" }) {
  return (
    <div>
      <div className="mb-8 ml-8 text-2xl">
        <Link
          href={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.pdf`}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <table className="table-auto border-none">
            <tbody>
              <tr>
                <td className="averia-font-700 w-32 align-top text-red-800 italic">
                  {fileName}
                </td>
                <td className="roboto-font-400 border border-none align-top font-bold text-blue-700">
                  {leeTitle}
                </td>
              </tr>
            </tbody>
          </table>
        </Link>
      </div>
    </div>
  );
}
