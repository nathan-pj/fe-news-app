import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from "react";
import DisplayComments from "./DisplayComments";
import axios from "axios";
import CommentWriter from "./CommentWriter";
import SimpleBackdrop from "../mainPage/SimpleBackdrop";
import Voter from "../mainPage/Voter";
const newsApi = axios.create({
  baseURL: "https://nc-example-news.herokuapp.com/api/",
});

export default function GetSingleArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [commentSubmit, setCommentSubmit] = useState("");
  const [deletedComment, setDeletedComment] = useState("");
  useEffect(() => {
    newsApi.get(`/articles/${id}`).then((res) => {
      setArticle(res.data.article);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    newsApi.get(`/articles/${id}/comments`).then((res) => {
      setComments(res.data.comments);
    });
  }, [commentSubmit, deletedComment]);

  if (isLoading) return <SimpleBackdrop />;
  else {
    return (
      <div key={article.article_id} className="article">
        <div className="voter">
          <Voter votes={article.votes} id={article.article_id} />
        </div>
        <div className="article__title">
          <h2>{article.title} </h2>
        </div>

        <div className="text">
          <p>{article.body}</p>
        </div>
        <p className="author">Written by {article.author}</p>

        <CommentWriter
          className="submit-comment"
          id={id}
          comment={comment}
          setComment={setComment}
          setCommentSubmit={setCommentSubmit}
          commentSubmit={commentSubmit}
        />
        <DisplayComments
          comments={comments}
          deletedComment={deletedComment}
          setDeletedComment={setDeletedComment}
          comment={comment}
        />

        <br />
      </div>
    );
  }
}
