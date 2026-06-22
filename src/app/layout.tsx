import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Amarjeet Kumar | Software Developer & AI Engineer",
  description:
    "Portfolio of Amarjeet Kumar — Software Developer building scalable backend systems, real-time AI calling services, and full-stack products using Node.js, Python, LangChain, and modern databases.",
  keywords: [
    "Amarjeet Kumar",
    "Software Developer",
    "Backend Engineer",
    "AI Engineer",
    "Node.js",
    "Python",
    "LangChain",
    "React",
    "Full Stack Developer",
    "Noida",
    "India",
  ],
  authors: [{ name: "Amarjeet Kumar" }],
  openGraph: {
    title: "Amarjeet Kumar | Software Developer & AI Engineer",
    description:
      "Building scalable backend systems, real-time AI calling services, and full-stack products.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
