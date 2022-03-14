import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import NotFound from "../../NotFound";

import DisplayComments from "./DisplayComments";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CommentWriter from "./CommentWriter";

import Voter from "../mainPage/Voter";
import DeleteArticle from "../mainPage/DeleteArticle";
import SimpleBackdrop from "../mainPage/SimpleBackdrop";

import apiCall from "../../../Api";
export default function DisplaySingleArticle({
  isLoading,
  setIsLoading,
  setDeletedArticle,
  signedIn,
}) {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [commentSubmit, setCommentSubmit] = useState("");
  const [deletedComment, setDeletedComment] = useState("");
  const [validId, setValidId] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    apiCall
      .get(`/articles/${id}`)
      .then((res) => {
        setArticle(res.data.article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setValidId(false);
      });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    apiCall
      .get(`/articles/${id}/comments`)
      .then((res) => {
        setComments(res.data.comments.reverse());

        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setValidId(false);
      });
  }, [commentSubmit, deletedComment, id]);
  if (isLoading) {
    return <SimpleBackdrop />;
  }
  return (
    <>
      {validId ? (
        <div key={article.article_id} className="article">
          {article.author === signedIn ? (
            <DeleteArticle
              article={article}
              setDeletedArticle={setDeletedArticle}
            />
          ) : null}
          <div className="article__title">
            <h2>{article.title} </h2>
          </div>

          <div className="text">
            <p>{article.body}</p>
          </div>
          <div className="article-icons">
            <div className="likes">
              <Voter votes={article.votes} id={article.article_id} />
            </div>
            <p className="author">
              <AccountCircleIcon />

              {article.author}
            </p>
          </div>

          <CommentWriter
            className="submit-comment"
            id={id}
            comment={comment}
            setComment={setComment}
            setCommentSubmit={setCommentSubmit}
            commentSubmit={commentSubmit}
            setComments={setComments}
            comments={comments}
          />
          <DisplayComments
            comments={comments}
            deletedComment={deletedComment}
            setDeletedComment={setDeletedComment}
            comment={comment}
            signedIn={signedIn}
          />

          <br />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
