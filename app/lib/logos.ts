type Sport = "soccer" | "nba" | "nfl" | "mlb";

const SOCCER_MAP: Record<string, string> = {
  america:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Club_Am%C3%A9rica_logo.svg/512px-Club_Am%C3%A9rica_logo.svg.png",
  clubamerica:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Club_Am%C3%A9rica_logo.svg/512px-Club_Am%C3%A9rica_logo.svg.png",

  monterrey:
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/C.F._Monterrey_logo.svg/512px-C.F._Monterrey_logo.svg.png",
  cfmonterrey:
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/C.F._Monterrey_logo.svg/512px-C.F._Monterrey_logo.svg.png",
};

const ESPN_MAP: Record<string, string> = {};

function normalize(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

export function getTeamLogoUrl(sport: Sport, codeOrName: string) {
  const key = normalize(codeOrName);
  if (sport === "soccer") return SOCCER_MAP[key] || "";
  return ESPN_MAP[key] || "";
}