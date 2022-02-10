import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LimitText from "./LimitText";
import SimpleBackdrop from "./SimpleBackdrop";
import NotFound from "../../NotFound";
import SortBy from "../../nav/SortBy";
const newsApi = axios.create({
  baseURL: "https://nc-example-news.herokuapp.com/api/",
});
export default function GetArticles({ sortBy, setSortBy }) {
  const { search } = useLocation();
  const searchQuery = search.split("=").pop();

  const [articlesList, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topicValidity, setTopicValidity] = useState(true);
  const [sortByChanged, setSortByChanged] = useState("yes");
  useEffect(() => {
    // console.log(sortBy);
    // if (!sortBy) {
    //   setSortBy("votes");
    // }

    newsApi
      .get("/articles", {
        params: {
          topic: searchQuery,
          sort_by: sortBy ? sortBy : setSortBy("votes"),
        },
      })
      .then((res) => {
        console.log(sortBy);
        setTopicValidity(true);
        setArticles(res.data.articles);

        setIsLoading(false);
      })
      .catch((err) => {
        setTopicValidity(false);
        setIsLoading(false);
      });
  }, [search, searchQuery, sortByChanged]);
  // console.log(articlesList);

  if (isLoading) {
    return <SimpleBackdrop />;
  }
  //else {
  //console.log(setSortBy);
  return (
    <>
      <SortBy setSortBy={setSortBy} setSortByChanged={setSortByChanged} />
      {topicValidity ? (
        articlesList.map((article) => {
          return (
            <div className="article" key={article.article_id}>
              <div className="text">
                <div className="article-text">
                  <h2 className="article-title">{article.title}</h2>
                  <Link
                    to={`/articles/${article.article_id}`}
                    className="links"
                  >
                    <p>
                      {LimitText(article.body)} ..
                      <p className="read-more">[read more]</p>
                    </p>
                  </Link>
                </div>
              </div>

              <br />
            </div>
          );
        })
      ) : (
        <NotFound />
      )}
    </>
  );
}
