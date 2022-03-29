import apiCall from "../../../Api";
import { useState } from "react";
import BinIcon from "../singleArticlePage/BinIcon";
import Alert from "@mui/material/Alert";
export default function DeleteArticle({ article, setDeletedArticle }) {
  function deleteCall(article_id) {
    apiCall.delete(`/articles/${article_id}`).then(() => {
      setDeleteSuccess(true);
      setDeletedArticle(article.article_id);
    });
  }
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  return (
    <div>
      <button
        className="bin-icon"
        onClick={() => {
          deleteCall(article.article_id, setDeletedArticle, article);
        }}
      >
        <BinIcon />
      </button>
      {deleteSuccess ? (
        <div className="delete-success">
          <Alert
            onClose={() => {
              setDeleteSuccess(false);
            }}
          >
            Post deleted
          </Alert>
        </div>
      ) : null}
    </div>
  );
}
