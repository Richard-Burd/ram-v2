import {
  PT_Serif,
  Roboto,
  Averia_Serif_Libre,
  Varela_Round,
  Nunito,
} from "next/font/google";
import "./globals.css";

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

// Import Varela-Round from Google Fonts
const varelaRound = Varela_Round({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-varela-round",
});

export const metadata = {
  title: "Recycling Advocates of Middle Tennessee",
  description:
    "RAM is a research and education-based group of citizens which advocates for the development of recycling techniques which foster industrial improvement, new jobs, prosperity, awareness, health, a cleaner environment, and the elimination of landfilling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${averia.variable} ${nunito.variable} ${ptSerif.variable} ${roboto.variable} ${varelaRound.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
