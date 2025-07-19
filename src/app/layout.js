import {
  PT_Serif,
  Roboto,
  Averia_Serif_Libre,
  Varela_Round,
  Nunito,
  Young_Serif,
} from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Construction from "../components/Construction";

// Import Averia Serif Libre from Google Fonts
const averia = Averia_Serif_Libre({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-averia",
});

// Import Nunito from Google Fonts
const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

// Import PT Serif from Google Fonts
const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-serif",
});

// Import Roboto from Google Fonts
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

// Import varela-round-font from Google Fonts
const varelaRound = Varela_Round({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-varela-round-font",
});

// Import Young-Serif from Google Fonts
const youngSerif = Young_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-young-serif",
});

const IMAGES_URI_PATH = process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH;

export const metadata = {
  title: "Recycling Advocates of Middle Tennessee",
  description:
    "RAM is a research and education-based group of citizens which advocates for the development of recycling techniques which foster industrial improvement, new jobs, prosperity, awareness, health, a cleaner environment, and the elimination of landfilling.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: `${IMAGES_URI_PATH}/ram-open-graph-image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${IMAGES_URI_PATH}/ram-open-graph-image.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${averia.variable} ${nunito.variable} ${ptSerif.variable} ${roboto.variable} ${varelaRound.variable} ${youngSerif.variable} antialiased`}
      >
        <div className="bg-opacity-95 bg-zinc-700">
          <div className="relative mx-auto sm:max-w-screen-lg lg:max-w-screen-lg lg:px-0">
            <div className="bg-slate-100">
              <Navbar />
              <main>{children}</main>
              <Footer />
              <Construction />
              <div className="m-4 bg-gradient-to-r from-zinc-500 to-zinc-100 p-4 text-2xl text-white">
                Updated Site w/Next v.14 (app router) & TailwindCSS v.4
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
