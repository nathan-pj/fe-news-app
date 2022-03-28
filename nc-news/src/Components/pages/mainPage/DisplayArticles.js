import apiCall from "../../../Api";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import limitText from "./LimitText";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SimpleBackdrop from "./SimpleBackdrop";
import NotFound from "../../NotFound";
import SortBy from "../../nav/SortBy";
import DeleteOption from "./DeleteArticle";
import OrderSwitch from "./OrderSwitch";

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

  const [articlesList, setArticlesList] = useState([]);

  const [topicValidity, setTopicValidity] = useState(true);
  const [sortByChanged, setSortByChanged] = useState("yes");
  const [order, setOrder] = useState("DESC");
  useEffect(() => {
    setIsLoading(true);
    apiCall
      .get(`/articles`, {
        params: {
          topic: searchQuery,
          sort_by: sortBy ? sortBy : setSortBy("votes"),
        },
      })
      .then((res) => {
        // if (sortBy === "title" || sortBy === "author") {
        //   setArticlesList(res.data.articles.reverse());
        // } else {

        setArticlesList(
          order === "DESC" ? res.data.articles : res.data.articles.reverse()
        );
        //}

        setIsLoading(false);
      })
      .catch((err) => {
        setTopicValidity(false);
        setIsLoading(false);
      });
  }, [
    search,
    searchQuery,
    sortByChanged,
    deletedArticle,
    setIsLoading,
    setSortBy,
    sortBy,
    order,
  ]);

  if (isLoading) {
    return <SimpleBackdrop />;
  }

  return (
    <>
      {topicValidity ? (
        <div>
          <div className="type-of-articles">
            {searchQuery.length > 0 ? (
              <h1>{searchQuery.toUpperCase()} Articles</h1>
            ) : (
              <h1>All Articles</h1>
            )}
          </div>
          <div className="sort-by-buttons">
            <SortBy
              setSortBy={setSortBy}
              sortBy={sortBy}
              setSortByChanged={setSortByChanged}
            />
          </div>
          <div className="order-switch">
            {/* <OrderSwitch
              order={order}
              setOrder={setOrder}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            /> */}
          </div>

          {articlesList.map((article) => {
            return (
              <div className="article" key={article.article_id}>
                <div className="text">
                  <div className="article-text">
                    <Link
                      to={`/articles/${article.article_id}`}
                      className="links"
                    >
                      <h2 className="article-title">{article.title}</h2>
                    </Link>
                    <div>
                      {limitText(article.body)}...
                      <Link
                        to={`/articles/${article.article_id}`}
                        className="links"
                      >
                        <p className="read-more">[read more]</p>
                      </Link>
                    </div>
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
