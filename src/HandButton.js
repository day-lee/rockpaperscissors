import HandIcon from "./HandIcon";
import "./HandButton.css";

function HandButton({ value, onClick, choice = "" }) {
  const handleClick = () => onClick(value);
  // 함수 이름이 onClick
  const className = `HandButton ${choice}`;
  return (
    <button className={className} onClick={handleClick}>
      {/* </button><button className="HandButton" onClick={onClick(value)}> */}
      {/* button의 onclick 속성에 함수를 연결해주면 클릭시 발생하는 함수 이벤트 트리거 가능  */}
      {/* onClick 함수는 클릭시 이벤트 객체를 전달함. value 값을 담은 객체를 전달하는 것인가? */}
      <HandIcon
        // style={handButtonStyle}
        value={value}
      />
    </button>
  );
}

export default HandButton;

// const handleClick = function() {
//     return onClick()
// }
