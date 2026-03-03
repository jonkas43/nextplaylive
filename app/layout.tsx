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
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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

            <input id="menuToggle" className="menuToggle" type="checkbox" />

            <label htmlFor="menuToggle" className="hamburger" aria-label="Abrir menú">
              <span />
              <span />
              <span />
            </label>

            <label htmlFor="menuToggle" className="menuOverlay" />

            <nav className="nav">
              <a href="/">Home</a>
              <a href="/live">En vivo</a>
              <a href="/leagues">Ligas</a>
              <a href="/login">Login</a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}