const HANDS = ["rock", "scissor", "paper"];

const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

export function compareHand(a, b) {
  if (WINS[a] === b) return 1;
  if (WINS[b] === a) return -1;
  return 0;
}

function random(n) {
  return Math.floor(Math.random() * n);
}

export function generateRandomHand() {
  const idx = random(HANDS.length);
  // 0,1,2 중에 하나 반환
  return HANDS[idx];
}
