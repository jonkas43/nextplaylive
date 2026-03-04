export const TEAM_LOGOS: Record<string, string> = {
  // Soccer (PNG thumb – estable para Next.js)
  america:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Club_Am%C3%A9rica_logo.svg/512px-Club_Am%C3%A9rica_logo.svg.png",

  monterrey:
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/C.F._Monterrey_logo.svg/512px-C.F._Monterrey_logo.svg.png",

  // NBA
  lakers:
    "https://loodibee.com/wp-content/uploads/nba-los-angeles-lakers-logo.png",

  warriors:
    "https://loodibee.com/wp-content/uploads/nba-golden-state-warriors-logo.png",

  celtics:
    "https://loodibee.com/wp-content/uploads/nba-boston-celtics-logo.png",

  // NFL
  chiefs:
    "https://loodibee.com/wp-content/uploads/nfl-kansas-city-chiefs-logo.png",

  eagles:
    "https://loodibee.com/wp-content/uploads/nfl-philadelphia-eagles-logo.png",

  // MLB
  yankees:
    "https://loodibee.com/wp-content/uploads/mlb-new-york-yankees-logo.png",

  dodgers:
    "https://loodibee.com/wp-content/uploads/mlb-los-angeles-dodgers-logo.png",
};

function normalizeKey(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/[^a-z0-9]+/g, ""); // quita espacios y símbolos
}

export function getTeamLogo(team: string) {
  const key = normalizeKey(team);

  // aliases comunes
  if (key === "clubamerica") return TEAM_LOGOS.america;
  if (key === "cfmonterrey") return TEAM_LOGOS.monterrey;
  if (key === "rayados") return TEAM_LOGOS.monterrey;

  return TEAM_LOGOS[key] || "";
}