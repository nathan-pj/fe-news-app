import axios from "axios";
import BinIcon from "./BinIcon";
function DeleteComment(comment_id, setDeletedComment, comment) {
  const commentApi = axios.create({
    baseURL: `https://news-app-npj.herokuapp.com/api/comments/${comment_id}`,
  });
  commentApi.delete().then(() => {
    setDeletedComment(comment.comment_id);
  });
}

export default function DeleteOption({ comment, setDeletedComment }) {
  return (
    <button
      className="bin-icon"
      onClick={() => {
        DeleteComment(comment.comment_id, setDeletedComment, comment);
      }}
    >
      <BinIcon />
    </button>
  );
}
