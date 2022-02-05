import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from "react";
import DisplayComments from "./DisplayComments";
import axios from "axios";
import CommentWriter from "./CommentWriter";
import SimpleBackdrop from "../mainPage/SimpleBackdrop";
import CustomizedProgressBars from "../../LoadingWheel";
const newsApi = axios.create({
  baseURL: "https://nc-example-news.herokuapp.com/api/",
});

export default function GetSingleArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    newsApi.get(`/articles/${id}`).then((res) => {
      setArticle(res.data.article);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    newsApi.get(`/articles/${id}/comments`).then((res) => {
      setComments(res.data.comments);
      console.log("req");
      console.log(comments);
    });
  }, []);

  if (isLoading) return <SimpleBackdrop />;
  else {
    return (
      <div key={article.article_id} className="article">
        <h2>{article.title}</h2>
        <div className="text">
          <p>{article.body}</p>
        </div>
        <CommentWriter comments={comments} id={id} />
        <DisplayComments comments={comments} />

        <br />
      </div>
    );
  }
}
