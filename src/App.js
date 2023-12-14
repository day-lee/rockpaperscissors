import { useState } from "react";
import Button from "./Button";
import HandButton from "./HandButton";
import { compareHand, generateRandomHand } from "./utils";
import HandIcon from "./HandIcon";
import "./HandButton.css";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "won";
  if (comparison < 0) return "lost";
  return "drew";
}

function App() {
  const [hand, setHand] = useState("rock");
  const [otherHand, setotherHand] = useState("rock");
  const [gameHistory, setgameHistory] = useState(["drew"]);
  const currentResult = gameHistory[gameHistory.length - 1];
  const [bet, setBet] = useState(1);
  const [myScore, setmyScore] = useState(0);
  const [otherScore, setotherScore] = useState(0);

  const handleBetChange = (e) => {
    setBet(e.target.value);
  };

  const handleButtonClick = (nextHand) => {
    setHand(nextHand);
    const nextOtherHand = generateRandomHand();
    setotherHand(nextOtherHand);

    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    setgameHistory([...gameHistory, nextHistoryItem]);
    if (nextHistoryItem === "won") {
      const sum = myScore + Number(bet);
      setmyScore(sum);
    } else if (nextHistoryItem === "lost") {
      const sum = otherScore + Number(bet);
      setotherScore(sum);
    }
  };

  const handleClearClick = () => {
    console.log("reset");
    setHand("rock");
    setotherHand("rock");
    setgameHistory([]);
    setmyScore(0);
    setotherScore(0);
  };

  return (
    <div className="Box">
      <h1 className="Heading">
        Rock paper scissors <br /> 👊 🖐️ ✌️{" "}
      </h1>
      <div className="BtnBox">
        <Button onClick={handleClearClick}>Reset</Button>
      </div>
      <div className="ScoreBox">
        <p>Result: {currentResult}</p>
        <p>
          Score: {myScore} : {otherScore}
        </p>
        <p>Bet: {bet}</p>
        <span> Score weight: </span>
        <input type="number" min="1" max="5" onChange={handleBetChange}></input>
        <p>Result History: {gameHistory.join(", ")}</p>
      </div>
      <div>
        <HandIcon value={hand} result="result" />
        <span>VS</span>
        <HandIcon value={otherHand} result="result" />
      </div>
      <hr></hr>
      <div className="ChoiceBox">
        <HandButton onClick={handleButtonClick} value="rock" choice="choice" />
        <HandButton
          onClick={handleButtonClick}
          value="scissor"
          choice="choice"
        />
        <HandButton onClick={handleButtonClick} value="paper" choice="choice" />
      </div>
    </div>
  );
}

export default App;
