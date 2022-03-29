import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

import SendIcon from "@mui/icons-material/Send";
import apiCall from "../../../Api";

export default function CommentWriter({
  id,
  comment,
  setComment,
  setCommentSubmit,
}) {
  const [commentError, setCommentError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.length !== 0) {
      setCommentError(false);
      apiCall
        .post(`articles/${id}/comments`, {
          body: comment,
          username: "jessjelly",
        })
        .then(() => {
          setCommentSubmit(comment);
          setComment("");
          e.target.reset();
        })
        .catch((err) => {
          console.log(err);
        });

      //
    } else {
      setCommentError(true);
      alert("cannot submit empty comment!");
    }
  };
  return (
    <form
      className="submit-comment"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        onChange={(e) => setComment(e.target.value)}
        label="Write a comment"
        variant="outlined"
        fullWidth
        multiline
        required
        error={commentError}
        rows={4}
      />
      <div className="send">
        <Button
          type="submit"
          style={{
            backgroundColor: "#2074dd",
            color: "white",
          }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
