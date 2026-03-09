import "./globals.css";
import type { Metadata } from "next";

import { LayoutShell } from "@/components/LayoutShell";

export const metadata: Metadata = {
  title: "VJ Interior Decorators & Painting Works",
  description:
    "Premium painting and interior decoration services by VJ Painting & Interior Decorators. Sparkle Interiors with expert wall painting, wood polish, and custom interior works.",
  metadataBase: new URL("https://www.example-vjpainting.com"),
  icons: {
    icon: "/images/logo_navbar.jpeg",
  },
  openGraph: {
    title: "VJ Painting & Interior Decorators",
    description:
      "Professional painting and interior solutions in deep blue and gold luxury style.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}

