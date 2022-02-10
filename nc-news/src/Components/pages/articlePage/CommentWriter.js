import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@mui/icons-material/Send";

import axios from "axios";

export default function CommentWriter({
  id,
  comment,
  setComment,
  setCommentSubmit,
}) {
  const postCommentApi = axios.create({
    baseURL: `https://nc-example-news.herokuapp.com/api/articles`,
  });

  const [commentError, setCommentError] = useState(false);
  const resetInputField = () => {
    setComment("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment) {
      setCommentError(false);
      postCommentApi
        .post(`/${id}/comments`, {
          body: comment,
          username: "jessjelly",
        })
        .then(() => {
          setCommentSubmit(comment);
          setComment("");
          e.target.reset();
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
