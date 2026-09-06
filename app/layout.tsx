import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La ciencia detrás de la vibroacústica | Bienestar Vibracional",
  description:
    "13 claves para comprender cómo el sonido y la vibración interactúan con el cuerpo, la percepción y el sistema nervioso.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/images/logo-bienestar-vibracional.png",
    shortcut: "/images/logo-bienestar-vibracional.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
