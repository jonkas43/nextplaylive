  type Sport = "soccer" | "nba" | "nfl" | "mlb";

const SOCCER_MAP: Record<string, string> = {
  america: "https://upload.wikimedia.org/wikipedia/en/1/1f/Club_Am%C3%A9rica_logo.svg",
  "clubamerica":
    "https://upload.wikimedia.org/wikipedia/en/1/1f/Club_Am%C3%A9rica_logo.svg",
  monterrey: "https://upload.wikimedia.org/wikipedia/en/9/9a/C.F._Monterrey_logo.svg",
  "cfmonterrey":
    "https://upload.wikimedia.org/wikipedia/en/9/9a/C.F._Monterrey_logo.svg",
};

const ESPN_MAP: Record<string, string> = {
  // Aquí puedes meter equipos que ESPN sí tenga, si los usas:
  // lakers: "https://a.espncdn.com/i/teamlogos/nba/500/lal.png",
};

function normalize(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/[^a-z0-9]+/g, ""); // quita espacios/guiones
}

export function getTeamLogoUrl(sport: Sport, codeOrName: string) {
  const key = normalize(codeOrName);

  if (sport === "soccer") return SOCCER_MAP[key] || "";
  // si luego quieres usar ESPN para otros deportes:
  return ESPN_MAP[key] || "";
}