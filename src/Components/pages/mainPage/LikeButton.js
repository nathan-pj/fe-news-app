import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";

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
