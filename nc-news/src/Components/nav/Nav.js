import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import UserIcon from "./UserIcon";
import { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
//import MenuIcon from "@mui/icons-material/Menu";
import LoadingBar from "../LoadingBar";
import axios from "axios";

const fetchTopics = axios.create({
  baseURL: "https://nc-example-news.herokuapp.com/api",
});

export default function Nav({ setSortBy }) {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchTopics.get("/topics/").then((res) => {
      setTopics(res.data.topics);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    LoadingBar();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <AppBar position="static" className="nav">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontSize: 25 }}
              >
                NC News
              </Typography>
            </Link>

            {topics.map((topic) => {
              return (
                <Link
                  className="nav-buttons"
                  to={`/articles?topic=${topic.slug}`}
                  style={{ textDecoration: "none" }}
                  onClick={setSortBy("")}
                >
                  <Button color="inherit">{topic.slug}</Button>
                </Link>
              );
            })}

            <UserIcon />
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  );
}
