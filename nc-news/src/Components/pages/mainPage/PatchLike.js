import axios from "axios";
export default function PatchLike(id, vote) {
  const newsApi = axios.create({
    baseURL: "https://news-app-npj.herokuapp.com/api/articles",
  });

  newsApi
    .patch(`/${id}`, { inc_votes: vote })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
