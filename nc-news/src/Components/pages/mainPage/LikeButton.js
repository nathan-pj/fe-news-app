import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
//import PatchLike from "./PatchLike";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import axios from "axios";
import { useParams } from "react-router-dom";

export const LikeButtonHollow = () => {
  return (
    <button className="thumb-icon">
      <ThumbUpOffAltIcon fontSize="large"></ThumbUpOffAltIcon>
    </button>
  );
};
export const LikeButtonFilled = () => {
  return (
    <button className="thumb-icon">
      <ThumbUpIcon fontSize="large"></ThumbUpIcon>
    </button>
  );
};
