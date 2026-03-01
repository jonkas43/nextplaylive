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
      <body style={{ fontFamily: "Arial, sans-serif" }}>
        <header style={{ padding: 16, borderBottom: "1px solid #ddd" }}>
          <nav style={{ display: "flex", gap: 12 }}>
            <a href="/">Home</a>
            <a href="/live">En vivo</a>
            <a href="/leagues">Ligas</a>
            <a href="/login">Login</a>
          </nav>
        </header>

        <main style={{ padding: 24 }}>{children}</main>
      </body>
    </html>
  );
}
