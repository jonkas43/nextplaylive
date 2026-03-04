export type Sport = "nba" | "nfl" | "mlb" | "soccer";

const SOCCER_MAP: Record<string, string> = {
  // claves normalizadas
  america:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Club_Am%C3%A9rica_logo.svg/240px-Club_Am%C3%A9rica_logo.svg.png",
  monterrey:
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/C.F._Monterrey_logo.svg/240px-C.F._Monterrey_logo.svg.png",
};

// quita acentos, puntos, espacios raros, etc.
function normalize(input: string) {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // acentos
    .replace(/[^a-z0-9]+/g, " ") // limpia
    .trim();
}

export function getTeamLogoUrl(sport: Sport, codeOrName: string): string | null {
  const raw = normalize(codeOrName);

  if (sport === "nba") return https://a.espncdn.com/i/teamlogos/nba/500/${raw}.png;
  if (sport === "nfl") return https://a.espncdn.com/i/teamlogos/nfl/500/${raw}.png;
  if (sport === "mlb") return https://a.espncdn.com/i/teamlogos/mlb/500/${raw}.png;

  // SOCCER
  if (sport === "soccer") {
    // acepta abreviaciones típicas
    if (raw === "ca" || raw === "club america" || raw === "america") return SOCCER_MAP.america;
    if (raw === "mty" || raw === "cf monterrey" || raw === "monterrey") return SOCCER_MAP.monterrey;

    // si ya viene como key
    const key = raw.replace(/\s+/g, "");
    return SOCCER_MAP[key] || null;
  }

  return null;
}