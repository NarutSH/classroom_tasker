import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CardFeature from "./CardFeature";

const Feature = () => {
  const features = [
    {
      title: "Tasks",
      detail:
        "Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy d cs eirmod dummy text here.",
      imagePath: "/assets/images/feature/f1.png",
      bgIconColor: "#FE3D3B",
    },
    {
      title: "Time Slots",
      detail:
        "Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy d cs eirmod dummy text here.",
      imagePath: "/assets/images/feature/f2.png",
      bgIconColor: "#0086D5",
    },
    {
      title: "Onboarding",
      detail:
        "Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy d cs eirmod dummy text here.",
      imagePath: "/assets/images/feature/f3.png",
      bgIconColor: "#15D088",
    },
    {
      title: "Collaboration",
      detail:
        "Lorem ipsum dolor sit amet, sconsetetur sadipscing elitr, sed diam nonumy d cs eirmod dummy text here.",
      imagePath: "/assets/images/feature/f4.png",
      bgIconColor: "#FFB601",
    },
  ];

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#FAFAFA",
        p: 2,
      }}
    >
      <Grid item xs={6}>
        <Stack spacing={3} justifyContent="center" height="100%">
          <Typography variant="caption" color="blue">
            Learn about Features{" "}
          </Typography>
          <Typography variant="h4">Our Top Features </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </Typography>
          <Box>
            <Button variant="contained">Get Started</Button>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={3}>
          {features.map((item) => {
            return (
              <Grid item xs={6}>
                <CardFeature
                  title={item.title}
                  detail={item.detail}
                  imagePath={item.imagePath}
                  bgIconColor={item.bgIconColor}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Feature;
