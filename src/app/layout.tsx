import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrinXO — Plan your child's birthday party in minutes | Gurgaon",
  description: "GrinXO helps busy parents in Gurgaon discover and book child-centric birthday venues, experiences, catering, decoration, entertainment and photography — brought together in one place.",
  metadataBase: new URL("https://grinxo.com"),
  openGraph: {
    title: "GrinXO — Plan your child's birthday party in minutes",
    description: "Discover and book child-centric birthday venues and experiences in Gurgaon — venue, food, décor, entertainment and photography in one place.",
    type: "website",
    url: "https://grinxo.com/",
    images: [{ url: "/assets/grinxo-mark.png" }],
  },
  icons: {
    icon: "/assets/grinxo-mark.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#764897",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jost.variable}>
      <head>
        <Script id="scroll-restore" strategy="afterInteractive">
          {`
            if ('scrollRestoration' in history) {
              history.scrollRestoration = 'manual';
            }
            window.scrollTo(0, 0);
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
