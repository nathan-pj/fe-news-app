import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import stringAvatar from "../../../Utils/StringAvatar";
import Stack from "@mui/material/Stack";
import BinIcon from "./BinIcon";
import DeleteComment from "./DeleteComment";
export default function DisplayComments({ comments }) {
  const singedIn = "jessjelly";

  return (
    <ul className="comments">
      {comments.map((comment) => {
        return (
          <List
            sx={{
              width: "100%",
              maxWidth: 900,
              bgcolor: "background.paper",
            }}
            className="text"
          >
            {comment.author === singedIn ? (
              <button
                className="bin-icon"
                onClick={() => DeleteComment(comment.comment_id)}
              >
                <BinIcon />
              </button>
            ) : null}

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Stack>
                  <Avatar {...stringAvatar(comment.author)} />
                </Stack>
              </ListItemAvatar>
              <ListItemText
                primary={comment.author}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`${comment.created_at.split("T")[0]} - `}
                    </Typography>
                    <p className="comments">{comment.body}</p>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        );
      })}
    </ul>
  );
}
