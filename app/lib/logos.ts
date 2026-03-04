export type Sport = "nba" | "nfl" | "mlb" | "soccer";

const SOCCER_MAP: Record<string, string> = {
  // claves normalizadas (sin acentos)
  america: "https://upload.wikimedia.org/wikipedia/en/1/1f/Club_Am%C3%A9rica_logo.svg",
  "club-america": "https://upload.wikimedia.org/wikipedia/en/1/1f/Club_Am%C3%A9rica_logo.svg",
  monterrey: "https://upload.wikimedia.org/wikipedia/en/9/9a/C.F._Monterrey_logo.svg",
  "cf-monterrey": "https://upload.wikimedia.org/wikipedia/en/9/9a/C.F._Monterrey_logo.svg",
};

function normalize(input: string) {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/[^a-z0-9]+/g, "-") // espacios y símbolos a guiones
    .replace(/^-+|-+$/g, ""); // recorta guiones
}

export function getTeamLogoUrl(sport: Sport, codeOrName: string): string | null {
  const raw = normalize(codeOrName);

  if (sport === "nba") {
    return "https://a.espncdn.com/i/teamlogos/nba/500/" + raw + ".png";
  }
  if (sport === "nfl") {
    return "https://a.espncdn.com/i/teamlogos/nfl/500/" + raw + ".png";
  }
  if (sport === "mlb") {
    return "https://a.espncdn.com/i/teamlogos/mlb/500/" + raw + ".png";
  }

  if (sport === "soccer") {
    return SOCCER_MAP[raw] || null;
  }

  return null;
}