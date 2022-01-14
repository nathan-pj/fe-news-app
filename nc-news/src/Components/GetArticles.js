import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomizedProgressBars from "./LoadingWheel";
import SimpleBackdrop from "./SimpleBackdrop";
import Voter from "./Voter";
const newsApi = axios.create({
  baseURL: "https://nc-example-news.herokuapp.com/api/",
});
export const GetArticles = () => {
  const { search } = useLocation();
  const searchQuery = search.split("=").pop();

  const [articlesList, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    newsApi.get("/articles", { params: { topic: searchQuery } }).then((res) => {
      setArticles(res.data.articles);
      setIsLoading(false);
    });
  }, [search]);
  // console.log(articlesList);

  if (isLoading) {
    return <SimpleBackdrop />;
  }
  //else {

  return articlesList.map((article) => {
    return (
      <div className="article" key={article.article_id}>
        <div className="text">
          <Voter
            className="text"
            votes={article.votes}
            id={article.article_id}
          />

          <Link to={`/articles/${article.article_id}`} className="links">
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </Link>
        </div>

        <br />
      </div>
    );
  });
  //}
};
