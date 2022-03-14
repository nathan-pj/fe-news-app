import { useState } from "react";
import { LikeButtonHollow, LikeButtonFilled } from "./LikeButton";
import PatchLike from "./PatchLike";
export default function Voter({ votes, id }) {
  let [currentVotes, updateVotes] = useState(votes);
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <div
        className="like__icon"
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
        <div className="like__number">{currentVotes}</div>
        {clicked ? LikeButtonFilled() : LikeButtonHollow()}
      </div>
    </div>
  );
}
