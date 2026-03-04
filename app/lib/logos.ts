[15:41, 4/3/2026] JK: export const TEAM_LOGOS: Record<string, string> = {
  america: "https://upload.wikimedia.org/wikipedia/en/1/1f/Club_Am%C3%A9rica_logo.svg",
  monterrey: "https://upload.wikimedia.org/wikipedia/en/9/9a/C.F._Monterrey_logo.svg",

  lakers: "https://loodibee.com/wp-content/uploads/nba-los-angeles-lakers-logo.png",
  warriors: "https://loodibee.com/wp-content/uploads/nba-golden-state-warriors-logo.png",
  celtics: "https://loodibee.com/wp-content/uploads/nba-boston-celtics-logo.png",

  chiefs: "https://loodibee.com/wp-content/uploads/nfl-kansas-city-chiefs-logo.png",
  eagles: "https://loodibee.com/wp-content/uploads/nfl-philadelphia-eagles-logo.png",

  yankees: "https://loodibee.com/wp-content/uploads/mlb-new-york-yankees-logo.png",
  dodgers: "https://loodib…
[15:42, 4/3/2026] JK: export const TEAM_LOGOS: Record<string, string> = {
  america: "https://upload.wikimedia.org/wikipedia/en/1/1f/Club_Am%C3%A9rica_logo.svg",
  monterrey: "https://upload.wikimedia.org/wikipedia/en/9/9a/C.F._Monterrey_logo.svg",

  lakers: "https://loodibee.com/wp-content/uploads/nba-los-angeles-lakers-logo.png",
  warriors: "https://loodibee.com/wp-content/uploads/nba-golden-state-warriors-logo.png",
  celtics: "https://loodibee.com/wp-content/uploads/nba-boston-celtics-logo.png",

  chiefs: "https://loodibee.com/wp-content/uploads/nfl-kansas-city-chiefs-logo.png",
  eagles: "https://loodibee.com/wp-content/uploads/nfl-philadelphia-eagles-logo.png",

  yankees: "https://loodibee.com/wp-content/uploads/mlb-new-york-yankees-logo.png",
  dodgers: "https://loodibee.com/wp-content/uploads/mlb-los-angeles-dodgers-logo.png",
};

export function getTeamLogo(team: string) {
  const key = team.toLowerCase().replace(/\s/g, "");
  return TEAM_LOGOS[key] || "/team-placeholder.png";
}