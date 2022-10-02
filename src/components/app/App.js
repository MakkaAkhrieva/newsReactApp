import CardsList from "../cardsList/CardsList";
import Filter from "../filter/Filter";
import Nav from "../nav/Nav";
import "./app.css";
import Context from "../../Context";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("russia");
  const [limit, setLimit] = useState(5);
  const changeTopic = (e) => {
    setTopic(e.target.value);
    console.log(e.target.value);
  };
  const search = (input) => {
    setTopic(input);
  };

  const setLim = () => {
    setLimit((limit) => limit + 5);
  };

  const setOffLim = () => {
    setLimit(5);
  };
  const value = {
    topic,
    changeTopic,
    search,
    limit,
    setLim,
    setOffLim,
  };

  return (
    <Context.Provider value={value}>
      <div className="App">
        <Nav />
        <Filter />
        <CardsList />
      </div>
    </Context.Provider>
  );
}

export default App;
