import "./filter.css";
import React, { useContext } from "react";
import Context from "../../Context";

const Filter = () => {
  const value = useContext(Context);

  const handlerClick = (e) => {
    value.changeTopic(e);
    value.setOffLim();
  };

  return (
    <div className="btn-flex">
      <button id="main-btn" value="russia" onClick={(e) => handlerClick(e)}>
        RUSSIA
      </button>
      <button id="bbc-btn" value="bbc" onClick={(e) => handlerClick(e)}>
        BBC
      </button>
      <button id="covid-btn" value="covid" onClick={(e) => handlerClick(e)}>
        COVID
      </button>
    </div>
  );
};

export default Filter;
