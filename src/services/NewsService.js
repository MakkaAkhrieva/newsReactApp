import { useHttp } from "../hooks/http.hook";

const useNewsService = () => {
  const { request } = useHttp();
  const _apiKey = "1ce567479c684aa0a3ba59de4cded4e0";

  const getAllNews = async (topic, limit = 5) => {
    const res = await request(
      `https://newsapi.org/v2/everything?q=${topic}&pageSize=${limit}&apiKey=${_apiKey}`
    );
    return res.articles.map(_transformNews);
  };
  const _transformNews = (news) => {
    return {
      urlToImage: news.urlToImage,
      name: news.source.name,
      alt: news.source.name,
      title: news.title
        ? `${news.title.slice(0, 100)}...`
        : "There is no title for this news",
      url: news.url,
    };
  };
  return { getAllNews };
};

export default useNewsService;
