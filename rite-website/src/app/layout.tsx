import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "RITE — Radhakrishna Institute of Technology & Engineering",
    template: "%s | RITE",
  },
  description:
    "AICTE Approved & NAAC Accredited engineering college in Bhubaneswar, Odisha. Offering B.Tech, MBA, MCA with 1200+ placements and world-class facilities.",
  keywords: [
    "RITE",
    "Radhakrishna Institute",
    "engineering college Odisha",
    "AICTE approved college",
    "BPUT affiliated",
    "B.Tech Bhubaneswar",
    "MBA Odisha",
    "MCA Odisha",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://riteindia.edu.in",
    siteName: "RITE — Radhakrishna Institute of Technology & Engineering",
    title: "RITE — Engineering Excellence in Odisha",
    description:
      "AICTE Approved & NAAC Accredited. 12+ years of innovation, 1200+ placements. Apply now for 2026-27.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RITE — Engineering Excellence in Odisha",
    description:
      "AICTE Approved & NAAC Accredited engineering college in Odisha.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <ScrollProgress />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
