import "./nav.css";
import img from "./2022-09-28_19-10-10.png";
import { useState, useContext } from "react";
import Context from "../../Context";
const Nav = () => {
  const value = useContext(Context);
  const [input, setInput] = useState("");

  const onUpdate = (e) => {
    e.preventDefault();
    const term = e.target.value;
    setInput(term);
    console.log(input);
  };
  const handlerClick = (e, input) => {
    e.preventDefault();
    value.search(input);
    value.setOffLim();
  };

  return (
    <div>
      <img className="newsapi" src={img} alt="newsapi" />
      <form action="" className="search">
        <input
          type="text"
          className="input"
          value={input}
          onChange={onUpdate}
        />
        <input
          className="submit"
          type="submit"
          value="Serch"
          onClick={(e) => handlerClick(e, input)}
        />
      </form>
    </div>
  );
};
export default Nav;
