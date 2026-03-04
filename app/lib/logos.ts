export type Sport = "nba" | "nfl" | "mlb" | "soccer";

const SOCCER_MAP: Record<string, string> = {
  america: "https://upload.wikimedia.org/wikipedia/en/1/1f/Club_Am%C3%A9rica_logo.svg",
  monterrey: "https://upload.wikimedia.org/wikipedia/en/9/9a/C.F._Monterrey_logo.svg",
};

export function getTeamLogoUrl(sport: Sport, code: string): string | null {
  const c = code.toLowerCase().trim();

  if (sport === "nba") {
    return "https://a.espncdn.com/i/teamlogos/nba/500/" + c + ".png";
  }

  if (sport === "nfl") {
    return "https://a.espncdn.com/i/teamlogos/nfl/500/" + c + ".png";
  }

  if (sport === "mlb") {
    return "https://a.espncdn.com/i/teamlogos/mlb/500/" + c + ".png";
  }

  if (sport === "soccer") {
    return SOCCER_MAP[c] || null;
  }

  return null;
}