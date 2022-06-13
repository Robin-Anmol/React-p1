import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  const array = [
    {
      name: "A",
      title: "Anmol Gangwar",
      date: "September 5 2021",
      link: "https://images.unsplash.com/photo-1652201571708-5fc7e7006dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
    {
      name: "V",
      title: "Vatsalya",
      date: "September 5 2021",
      link: "https://images.unsplash.com/photo-1652267389101-553eced76024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "R",
      title: "Robin",
      date: "September 5 2021",
      link: "https://images.unsplash.com/photo-1652201571708-5fc7e7006dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
    {
      name: "A",
      title: "Anmol ",
      date: "September 5 2021",
      link: "https://images.unsplash.com/photo-1652201571708-5fc7e7006dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
  ];
  return (
    <Box sx={{ marginBottom: "1rem", marginLeft: "1rem" }} flex={4} p={2}>
      {array.map((item) => {
        return (
          <Post
            name={item.name}
            title={item.title}
            date={item.date}
            link={item.link}
            key={Math.random()}
          />
        );
      })}
    </Box>
  );
};

export default Feed;
