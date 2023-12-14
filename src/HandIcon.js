import rockImg from "./assets/rock.webp";
import paperImg from "./assets/paper.webp";
import scissorImg from "./assets/scissor.png";
import "./HandButton.css";

const DICE_IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

// const handButtonStyle = {
//   width: "55px",
//   height: "55px",
// };

function HandIcon({ value, result = "" }) {
  const src = DICE_IMAGES[value];
  const alt = `${value}`;
  const className = `HandButtonDirectIcon ${result}`;
  return (
    // <img width="150px" src={src} alt={alt} />
    //<img style={handButtonStyle} src={src} alt={alt} />
    <img className={className} src={src} alt={alt} />

    // <>
    //   <img src={rock} alt="rock" />;
    //   <img src={scissor} alt="scissor" />;
    //   <img src={paper} alt="paper" />;
    // </>
  );
}

export default HandIcon;
