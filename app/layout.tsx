import "./globals.css";
import type { Metadata, Viewport } from "next";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="topbar">
          <div className="topbarInner">
            <img className="logo" src="/logo.png" alt="Next Play Live" />

            {/* Toggle invisible */}
            <input id="menuToggle" className="menuToggle" type="checkbox" />

            {/* Botón hamburger (las 3 rayitas las dibuja CSS con ::before) */}
            <label htmlFor="menuToggle" className="hamburger" aria-label="Abrir menú" />

            {/* Overlay para cerrar tocando fuera */}
            <label htmlFor="menuToggle" className="menuOverlay" aria-hidden="true" />

            <nav className="nav">
              <a href="/">Home</a>
              <a href="/live">En vivo</a>
              <a href="/leagues">Ligas</a>
              <a href="/login">Login</a>
            </nav>
          </div>
        </header>

        {/* IMPORTANTE: esto aplica el layout centrado (.page) */}
        <main className="page">{children}</main>
      </body>
    </html>
  );
}