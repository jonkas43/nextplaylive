import "./globals.css";
import type { Metadata, Viewport } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Next Play Live",
  description: "Scores en vivo",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    // Si NO tienes apple-touch-icon.png, déjalo comentado.
    // apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: "Next Play Live",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#39FF14",
};

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/live", label: "En vivo" },
  { href: "/leagues", label: "Ligas" },
  { href: "/login", label: "Login" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="topbar">
          <div className="topbarInner">
            <Image
              className="logo"
              src="/logo.png"
              alt="Next Play Live"
              width={220}
              height={60}
              priority
            />

            {/* Toggle invisible */}
            <input id="menuToggle" className="menuToggle" type="checkbox" />

            {/* Botón hamburger */}
            <label htmlFor="menuToggle" className="hamburger" aria-label="Abrir menú" />

            {/* Overlay para cerrar tocando fuera */}
            <label htmlFor="menuToggle" className="menuOverlay" aria-hidden="true" />

            <nav className="nav" aria-label="Navegación principal">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href}>
                  {/* label dentro cierra el menú (desmarca checkbox) */}
                  <label htmlFor="menuToggle" style={{ cursor: "pointer" }}>
                    {l.label}
                  </label>
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="page">{children}</main>
      </body>
    </html>
  );
}
