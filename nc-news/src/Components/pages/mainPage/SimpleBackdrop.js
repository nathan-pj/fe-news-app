import * as React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export default function SimpleBackdrop() {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
