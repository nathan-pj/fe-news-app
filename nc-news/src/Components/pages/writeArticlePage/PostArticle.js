import axios from "axios";
import { useEffect } from "react";
export default function PostArticle({
  title,
  body,
  topic,
  setPostSuccess,
  postSuccess,
}) {
  console.log(title, body, topic);
  useEffect(() => {
    const postToApi = axios.create({
      baseURL: `https://news-app-npj.herokuapp.com/api`,
    });
    postToApi
      .post("/articles", {
        title: title,
        body: body,
        topic: topic,
        author: "jessjelly",
      })
      .then((response) => {
        console.log(response);
        setPostSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [title, body, topic, setPostSuccess]);
  return postSuccess ? <div>success</div> : null;
}
