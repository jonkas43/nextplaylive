import "./globals.css";
export const metadata = {
  title: "Next Play Live",
  description: "Scores en vivo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header style={{ padding: "18px 24px", borderBottom: "1px solid #1f2937", background: "#0b0f14" }}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1200, margin: "0 auto" }}>
    <a href="/">
      <img src="/logo.png" alt="Next Play Live" style={{ height: 42 }} />
    </a>

    <nav style={{ display: "flex", gap: 22 }}>
      <a href="/" style={{ textDecoration: "none", color: "#9ca3af", fontSize: 14, letterSpacing: 1 }}>Home</a>
      <a href="/live" style={{ textDecoration: "none", color: "#9ca3af", fontSize: 14, letterSpacing: 1 }}>En vivo</a>
      <a href="/leagues" style={{ textDecoration: "none", color: "#9ca3af", fontSize: 14, letterSpacing: 1 }}>Ligas</a>
      <a href="/login" style={{ textDecoration: "none", color: "#9ca3af", fontSize: 14, letterSpacing: 1 }}>Login</a>
    </nav>
  </div>
</header>

        <main className="container">{children}</main>
      </body>
    </html>
  );
}
