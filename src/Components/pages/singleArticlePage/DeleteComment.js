import apiCall from "../../../Api";
import BinIcon from "./BinIcon";
function DeleteComment(comment_id, setDeletedComment, comment) {
  apiCall.delete(`/comments/${comment_id}`).then(() => {
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
