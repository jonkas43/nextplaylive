export type Sport = "nba" | "nfl" | "mlb" | "soccer";

const SOCCER_MAP: Record<string, string> = {
  america: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Club_Am%C3%A9rica_crest.svg/240px-Club_Am%C3%A9rica_crest.svg.png",
  monterrey: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Club_de_F%C3%BAtbol_Monterrey_logo.svg/240px-Club_de_F%C3%BAtbol_Monterrey_logo.svg.png",
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