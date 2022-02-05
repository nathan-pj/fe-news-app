import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { Link, useLocation } from "react-router-dom";
//import MenuIcon from "@mui/icons-material/Menu";
import LoadingBar from "../LoadingBar";
import axios from "axios";
import SortByDropDown from "./SortByDropDown";
const fetchTopics = axios.create({
  baseURL: "https://nc-example-news.herokuapp.com/api",
});
export default function Nav() {
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
  console.log(useLocation());
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
              >
                <Button color="inherit">{topic.slug}</Button>
              </Link>
            );
          })}
          <SortByDropDown />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
