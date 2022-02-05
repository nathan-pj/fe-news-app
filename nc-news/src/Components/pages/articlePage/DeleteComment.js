import axios from "axios";

export default function DeleteComment(comment_id) {
  const commentApi = axios.create({
    baseURL: `https://nc-example-news.herokuapp.com/api/comments/${comment_id}`,
  });
  commentApi.delete().then((res) => {
    console.log(res.data);
  });
}
