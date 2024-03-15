import reactImg from "../../images/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img id="logo" src={reactImg} alt="" />
      <h1>REACT ESSENTIALS</h1>
      <p>
        {description} concepts you will need for most any app you are going to
        build!
      </p>
    </header>
  );
}
