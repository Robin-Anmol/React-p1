import {
  AppBar,
  styled,
  Toolbar,
  TextField,
  Box,
  InputBase,
  Badge,
  Typography,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import RedditIcon from "@mui/icons-material/Reddit";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import theme from "@mui/icons-material/";
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

// const Search = styled(InputBase)({
//   backgroundColor: "white",
//   width: "50%",
//   padding: "0.2rem 0.5rem",
//   borderRadius: "15px",
// });

const Search = styled("div")((theme) => ({
  backgroundColor: "white",
  padding: "3px 10px",
  borderRadius: "5px",
  width: "50%",
}));
const Icons = styled(Box)((theme) => ({
  marginRight: "1rem",
  display: "none",
  alignContent: "center",
  gap: "1rem",
}));
const UserBox = styled(Box)((theme) => ({
  marginRight: "1rem",
  display: "none",
  alignContent: "center",
  justifyContent: "center",

  gap: "1rem",
}));
const Notification = styled(Notifications)({
  alignSelf: "center",
  "&:hover": {
    color: "#000",
  },

  cursor: "pointer",
});
const MailIcons = styled(MailIcon)({
  alignSelf: "center",
  "&:hover": {
    color: "#000",
  },
});
const User = styled(Avatar)((theme) => ({
  width: "40px",
  height: "40px",
}));
const Navbar = () => {
  const [Open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#333333" }}>
      <StyledToolBar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          Robin
        </Typography>
        <RedditIcon sx={{ display: { xs: "block", sm: "none" } }} />
        {/* <Search
          sx={{ display: { xs: "none", sm: "block" } }}
          placeholder="Search...."
        /> */}
        <Search>
          <InputBase sx={{ width: "100%" }} placeholder="Search..." />
        </Search>

        <Icons sx={{ display: { sm: "flex" } }} s>
          <Badge badgeContent={4} color="error">
            <MailIcons />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notification />
          </Badge>
          <User
            onClick={(e) => {
              setOpen(true);
            }}
            src="https://randomuser.me/api/portraits/women/11.jpg"
          ></User>
        </Icons>
        <UserBox
          onClick={(e) => {
            setOpen(true);
          }}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <User src="https://randomuser.me/api/portraits/women/11.jpg"></User>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={Open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={(e) => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={(e) => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={(e) => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
