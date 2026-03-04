export type Sport = "nba" | "nfl" | "mlb" | "soccer";

export function getTeamLogoUrl(sport: Sport, code: string) {
  const c = code.toLowerCase();

  if (sport === "nba") {
    return https://a.espncdn.com/i/teamlogos/nba/500/${c}.png;
  }

  if (sport === "nfl") {
    return https://a.espncdn.com/i/teamlogos/nfl/500/${c}.png;
  }

  if (sport === "mlb") {
    return https://a.espncdn.com/i/teamlogos/mlb/500/${c}.png;
  }

  return null;
}