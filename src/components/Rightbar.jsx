import * as React from "react";
import { AvatarGroup, Box, ImageList, ImageListItem } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { List } from "@mui/icons-material";

const Rightbar = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
  ];
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight="100">
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/10.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://randomuser.me/api/portraits/women/1.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://randomuser.me/api/portraits/men/11.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://randomuser.me/api/portraits/women/13.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/men/17.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight="100">
          Latest Posts
        </Typography>

        <ImageList
          sx={{ width: "100%", height: "max-Content" }}
          cols={3}
          rowHeight={100}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=100&h=100&fit=crop&auto=format`}
                srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight="100">
          Latest Conversation
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
