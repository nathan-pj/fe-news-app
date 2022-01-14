import { useState } from "react";
import { LikeButtonHollow, LikeButtonFilled } from "./LikeButton";
import PatchLike from "./PatchLike";
export default function Voter({ votes, id }) {
  let [currentVotes, updateVotes] = useState(votes);
  const [clicked, setClicked] = useState(false);
  return (
    <a className="text">
      {currentVotes}
      <p
        className="like-button"
        onClick={() => {
          if (clicked) {
            setClicked(false);
            updateVotes((currentVotes -= 1));
            PatchLike(id, -1);
          } else {
            setClicked(true);
            updateVotes((currentVotes += 1));
            PatchLike(id, 1);
          }
        }}
      >
        {clicked ? LikeButtonFilled() : LikeButtonHollow()}
      </p>
    </a>
  );
}
