import React from "react";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import { ButtonGroup } from '@material-ui/core'
import Container from "@material-ui/core/Container";
// import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined'
//import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import PickTopic from "./PickTopic";
import PostArticle from "./PostArticle";
const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function WriteArticle() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [topicError, setTopicError] = useState(false);
  const [topic, setTopic] = useState("");
  const [postSuccess, setPostSuccess] = useState(false);
  const [postReady, setPostReady] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setBodyError(false);
    setTopicError(false);
    if (title === "") {
      setTitleError(true);
      alert("title is empty");
    }

    if (body === "") {
      setBodyError(true);
      alert("body is empty");
    }
    if (topic === "") {
      setTopicError(true);
      alert("no topic selected");
    }
    if (title && body && topic) {
      console.log(title, body, topic);
      setPostReady(true);

      console.log("success");
    }
  };

  return (
    <div>
      <Container>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
          className={classes.title}
        ></Typography>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className="pick-topic">
            <PickTopic
              onChange={(e) => setTopic(e.target.value)}
              setTopic={setTopic}
            />
          </div>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={classes.field}
            label="Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
          />

          <TextField
            onChange={(e) => setBody(e.target.value)}
            className={classes.field}
            label="Body"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={bodyError}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRight />}
          >
            Submit
          </Button>
        </form>
      </Container>
      {postReady ? (
        <PostArticle
          title={title}
          body={body}
          topic={topic}
          setPostSuccess={setPostSuccess}
          postSuccess={postSuccess}
        />
      ) : null}
      {/* {postSuccess ? <div>success!</div> : null} */}
    </div>
  );
}
