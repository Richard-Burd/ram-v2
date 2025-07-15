import Image from "next/image";

const ARTICLE_IMAGES_URI_PATH = process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH;

export default function Home() {
  return (
    <div className="m-10">
      <div className="pt-serif-700 text-5xl italic">RAM Landing Page</div>
      <div className="varela-round mt-4 text-3xl">Varela Round</div>
      <div className="averia-font-400 mt-4 text-3xl">Averia</div>
      <div className="nunito-font-400 mt-4 text-3xl">Nunito</div>
      <Image
        src={`${ARTICLE_IMAGES_URI_PATH}/ram-open-graph-image.png`}
        alt="RAM Open Graph Image"
        width={1200}
        height={630}
      />
    </div>
  );
}
