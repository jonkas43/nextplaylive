import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Play Live",
  description: "Scores en vivo",
  manifest: "/manifest.webmanifest",
  themeColor: "#05070c",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="topbar">
          <div className="topbarInner">
            <a href="/" aria-label="Next Play Live">
              <img className="logo" src="/logo.png" alt="Next Play Live" />
            </a>

            {/* Toggle invisible */}
            <input id="menuToggle" className="menuToggle" type="checkbox" />

            {/* Botón hamburguesa */}
            <label htmlFor="menuToggle" className="hamburger" aria-label="Abrir menú">
              <span />
              <span />
              <span />
            </label>

            {/* Overlay (click para cerrar) */}
            <label htmlFor="menuToggle" className="menuOverlay" aria-hidden="true" />

            {/* Menú */}
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/live">En vivo</a>
              <a href="/leagues">Ligas</a>
              <a href="/login">Login</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}