import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import limitText from "./limitText";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SimpleBackdrop from "./SimpleBackdrop";
import NotFound from "../../NotFound";
import SortBy from "../../nav/SortBy";
import DeleteOption from "./DeleteArticle";
const newsApi = axios.create({
  baseURL: "https://news-app-npj.herokuapp.com/api/",
});
export default function DisplayArticles({
  sortBy,
  setSortBy,
  isLoading,
  setIsLoading,
  deletedArticle,
  setDeletedArticle,
  signedIn,
}) {
  const { search } = useLocation();
  const searchQuery = search.split("=").pop();

  const [articlesList, setArticles] = useState([]);

  const [topicValidity, setTopicValidity] = useState(true);
  const [sortByChanged, setSortByChanged] = useState("yes");

  useEffect(() => {
    setIsLoading(true);
    newsApi
      .get(`/articles`, {
        params: {
          topic: searchQuery,
          sort_by: sortBy ? sortBy : setSortBy("votes"),
        },
      })
      .then((res) => {
        setArticles(res.data.articles);

        setIsLoading(false);
      })
      .catch((err) => {
        setTopicValidity(false);
        setIsLoading(false);
      });
  }, [search, searchQuery, sortByChanged, deletedArticle]);

  if (isLoading) {
    return <SimpleBackdrop />;
  }

  return (
    <>
      {topicValidity ? (
        <div>
          <div className="type-of-articles">
            {searchQuery.length > 0 ? (
              <h1>{searchQuery} articles</h1>
            ) : (
              <h1>all articles</h1>
            )}
          </div>
          <div className="sort-by-buttons">
            <SortBy setSortBy={setSortBy} setSortByChanged={setSortByChanged} />
          </div>

          {articlesList.map((article) => {
            return (
              <div className="article" key={article.article_id}>
                <div className="text">
                  <div className="article-text">
                    <h2 className="article-title">{article.title}</h2>

                    <Link
                      to={`/articles/${article.article_id}`}
                      className="links"
                    >
                      <div>
                        {limitText(article.body)}...
                        <p className="read-more">[read more]</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="article-icons">
                  {article.author === signedIn ? (
                    <DeleteOption
                      article={article}
                      setDeletedArticle={setDeletedArticle}
                    />
                  ) : null}
                  <div className="author">
                    <AccountCircleIcon />
                    {article.author}
                  </div>
                  <div className="comments">
                    <ChatIcon />
                    {article.comment_count}
                  </div>

                  <div className="likes">
                    <ThumbUpAltIcon />
                    {article.votes}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
