import type { Metadata } from "next";
import { Great_Vibes, Cinzel, Cormorant_Garamond, Amiri } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
  display: "swap",
});

export const viewport = {
  themeColor: "#B3122B",
};

export const metadata: Metadata = {
  title: "Undangan Khitanan Raihan Alhafiz",
  description: "Undangan digital khitanan Raihan Alhafiz",
  metadataBase: new URL("https://undangan-raihan.vercel.app"),
  openGraph: {
    title: "Undangan Khitanan Raihan Alhafiz",
    description: "Undangan digital khitanan Raihan Alhafiz",
    images: ["/og.jpg"],
    type: "website",
  },
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${greatVibes.variable} ${cinzel.variable} ${cormorant.variable} ${amiri.variable} antialiased bg-stone-900`}
      >
        <div className="flex justify-center min-h-[100dvh] w-full">
          {/* Main container limited to 480px width for desktop, full width on mobile */}
          <main className="w-full max-w-[480px] bg-cream shadow-2xl relative overflow-hidden bg-cover bg-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
