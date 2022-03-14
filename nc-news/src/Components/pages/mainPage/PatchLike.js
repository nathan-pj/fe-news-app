import apiCall from "../../../Api";
export default function PatchLike(id, vote) {
  apiCall
    .patch(`articles/${id}`, { inc_votes: vote })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
