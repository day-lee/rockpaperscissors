import { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<h1> react</h1>);
root.render(<App />);

// const WINS = {
//   rock: "scissor",
//   scissor: "paper",
//   paper: "rock",
// };

// function getResult(left, right) {
//   if (WINS[left] === right) return "won";
//   else if (left === WINS[right]) return "lost";
//   else return "draw";
// }

// function handleClick() {
//   console.log("rock scissor paper!");
// }

// const me = "paper";
// const other = "rock";
// const result = getResult(me, other);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <h1 id="title">가위바위보</h1>
//     <h2>{result}</h2>
//     <button onClick={handleClick}>가위</button>
//     <button onClick={handleClick}>보</button>
//     <button onClick={handleClick}>바위</button>
//   </>
// );
