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

  setDeletedComment,
  signedIn,
}) {
  return (
    <div>
      <p className="comment-count">{comments.length} comments</p>
      <ul className="comments">
        {comments.map((comment, i) => {
          return (
            <List
              key={`comment${i}`}
              sx={{
                width: "100%",
                maxWidth: 900,
                bgcolor: "background.paper",
              }}
              className="text"
            >
              <ListItem alignItems="flex-start">
                {comment.author === signedIn ? (
                  <DeleteOption
                    comment={comment}
                    setDeletedComment={setDeletedComment}
                  />
                ) : null}
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
                      <div className="comments">{comment.body}</div>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          );
        })}
      </ul>
    </div>
  );
}
