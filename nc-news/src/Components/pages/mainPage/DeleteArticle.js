import axios from "axios";
import BinIcon from "../singleArticlePage/BinIcon";
function DeleteArticle(article_id, setDeletedArticle, article) {
  const articleApi = axios.create({
    baseURL: `https://news-app-npj.herokuapp.com/api/articles/${article_id}`,
  });
  articleApi.delete().then(() => {
    setDeletedArticle(article.article_id);
  });
}

export default function DeleteOption({ article, setDeletedArticle }) {
  return (
    <button
      className="bin-icon"
      onClick={() => {
        DeleteArticle(article.article_id, setDeletedArticle, article);
      }}
    >
      <BinIcon />
    </button>
  );
}
