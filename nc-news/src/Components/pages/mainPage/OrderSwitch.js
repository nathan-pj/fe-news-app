import React, { useState } from "react";
import { Switch, Grid } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createTheme({
  overrides: {
    MuiSwitch: {
      switchBase: {
        // Controls default (unchecked) color for the thumb
        color: "#f8f4f4",
      },
      colorSecondary: {
        "&$checked": {
          // Controls checked color for the thumb
          color: "#f8f4f4",
        },
      },
      track: {
        // Controls default (unchecked) color for the track
        opacity: 0.7,
        backgroundColor: "#2da2f1",
        "$checked$checked + &": {
          // Controls checked color for the track
          opacity: 0.7,
          backgroundColor: "#2da2f1",
        },
      },
    },
  },
});
export default function OrderSwitch({ order, setOrder }) {
  const [checked, setChecked] = useState(true);

  const switchHandler = (event) => {
    setChecked(event.target.checked);

    setOrder(checked ? "DESC" : "ASC");
  };

  return (
    <div>
      <h1>{String(order)}</h1>
      <h1>{String(checked)}</h1>
      <ThemeProvider theme={theme}>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Ascending</Grid>
          <Grid item>
            <Switch checked={checked} onChange={switchHandler} name="switch" />
          </Grid>
          <Grid item>Descending</Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
