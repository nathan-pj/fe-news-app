import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@mui/icons-material/Send";

import axios from "axios";
import GetSingleArticle from "./GetSingleArticle";

export default function CommentWriter({ comments, id }) {
  const postCommentApi = axios.create({
    baseURL: `https://nc-example-news.herokuapp.com/api/articles`,
  });
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);
  const resetInputField = () => {
    setComment("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      console.log(comment);
      setCommentError(false);
      postCommentApi.post(`/${id}/comments`, {
        body: comment,
        username: "jessjelly",
      });

      //
    } else {
      setCommentError(true);
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
      <Button
        type="submit"
        style={{
          backgroundColor: "#2074dd",
          color: "white",
        }}
        className="send"
        variant="contained"
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
    </form>
  );
}
