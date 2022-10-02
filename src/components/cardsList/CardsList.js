import { useEffect, useState, useContext } from "react";
import useNewsService from "../../services/NewsService";
import "./cardsList.css";
import Context from "../../Context";

const CardsList = (props) => {
  const value = useContext(Context);
  const message = (
    <h1 style={{ color: "red", margin: "0 auto" }}>
      There are no articles matching your request
    </h1>
  );
  const [cardsList, setCardsList] = useState([]);
  const { getAllNews } = useNewsService();

  useEffect(() => {
    getAllNews(value.topic, value.limit).then((list) => {
      setCardsList([...list]);
    });
  }, [value.topic, value.limit]);

  const load = () => {
    value.setLim();
  };

  const items = cardsList.map((item, index) => {
    return (
      <div className="news-card" key={index}>
        <img className="news-img" src={item.urlToImage} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.title}</p>
        <a href={item.url} rel="noreferrer" target="_blank">
          Read more:
        </a>
      </div>
    );
  });

  if (items.length === 0) {
    return message;
  }

  return (
    <>
      <div className="news-flex-container">{items}</div>
      <button onClick={load}>Load more</button>
    </>
  );
};

export default CardsList;
