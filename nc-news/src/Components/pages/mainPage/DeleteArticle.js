import apiCall from "../../../Api";
import BinIcon from "../singleArticlePage/BinIcon";
function deleteCall(article_id, setDeletedArticle, article) {
  apiCall.delete(`/articles/${article_id}`).then(() => {
    setDeletedArticle(article.article_id);
  });
}

export default function DeleteArticle({ article, setDeletedArticle }) {
  return (
    <button
      className="bin-icon"
      onClick={() => {
        deleteCall(article.article_id, setDeletedArticle, article);
      }}
    >
      <BinIcon />
    </button>
  );
}
