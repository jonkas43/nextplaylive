 export type Sport = "nba" | "nfl" | "mlb" | "soccer";

const SOCCER_MAP: Record<string, string> = {
  america:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Club_Am%C3%A9rica_logo.svg/240px-Club_Am%C3%A9rica_logo.svg.png",
  monterrey:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Club_de_F%C3%BAtbol_Monterrey_logo.svg/240px-Club_de_F%C3%BAtbol_Monterrey_logo.svg.png",
};

export function getTeamLogoUrl(
  sport: Sport,
  code: string
): string | null {
  const c = code.toLowerCase().trim();

  if (sport === "nba") {
    return "https://a.espncdn.com/i/teamlogos/nba/500/" + c + ".png";
  }

  if (sport === "nfl") {
    return "https://a.espncdn.com/i/teamlogos/nfl/500/" + c + ".png";
  }

  if (sport === "mlb") {
    return …
[12:38, 4/3/2026] JK: git add .
git commit -m "fix america logo"
git push
[12:44, 4/3/2026] JK: export type Sport = "nba" | "nfl" | "mlb" | "soccer";

/** Alias para que puedas mandar "CA" o "america" y funcione */
const SOCCER_ALIAS: Record<string, string> = {
  ca: "america",
  "club america": "america",
  america: "america",

  mty: "monterrey",
  monterrey: "monterrey",
  rayados: "monterrey",
};

/** URLs (en PNG) */
const SOCCER_MAP: Record<string, string> = {
  america:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Club_Am%C3%A9rica_logo.svg/240px-Club_Am%C3%A9rica_logo.svg.png",
  monterrey:
    "https://upload.wikimedia.org/wikipedia/en/9/9a/C.F._Monterrey_logo.svg",
};

export function getTeamLogoUrl(sport: Sport, code: string): string | null {
  const c = code.toLowerCase().trim();

  if (sport === "nba") return https://a.espncdn.com/i/teamlogos/nba/500/${c}.png;
  if (sport === "nfl") return https://a.espncdn.com/i/teamlogos/nfl/500/${c}.png;
  if (sport === "mlb") return https://a.espncdn.com/i/teamlogos/mlb/500/${c}.png;

  if (sport === "soccer") {
    const key = SOCCER_ALIAS[c] || c; // <- si llega "ca", lo convierte a "america"
    return SOCCER_MAP[key] || null;
  }

  return null;
}