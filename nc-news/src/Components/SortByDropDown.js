import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TitleIcon from "@mui/icons-material/Title";
import RecommendIcon from "@mui/icons-material/Recommend";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ForumIcon from "@mui/icons-material/Forum";
import HandleOptionClick from "./HandleOptionClick";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 10,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(32, 116, 221)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function SortByDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("clicked menu");
  };
  // const handleOptionClick = (option) => {
  //   console.log("clicked " + option);
  // };
  const handleClose = (option) => {
    if (typeof option === "string") {
      HandleOptionClick(option);
    }
    setAnchorEl(null);
  };
  let navigate = useNavigate();

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleMenuClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Sort by
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("title")} disableRipple>
          <TitleIcon />
          Title
        </MenuItem>
        <MenuItem onClick={() => handleClose("date")} disableRipple>
          <CalendarTodayIcon />
          Date
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        <MenuItem onClick={() => handleClose("votes")} disableRipple>
          <RecommendIcon />
          Votes
        </MenuItem>
        <MenuItem onClick={() => handleClose("comments")} disableRipple>
          <ForumIcon />
          Comments
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
