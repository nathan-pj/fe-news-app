import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";

import stringAvatar from "../../../Utils/StringAvatar";
import DeleteOption from "./DeleteComment";

export default function DisplayComments({
  comments,
  deletedComment,
  setDeletedComment,
  comment,
}) {
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
              <DeleteOption
                comment={comment}
                setDeletedComment={setDeletedComment}
              />
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
