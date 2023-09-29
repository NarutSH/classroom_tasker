import React from "react";
import { Card, Stack, Box, Typography } from "@mui/material";

const CardFeature = ({ title, detail, imagePath, bgIconColor }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "220px",
        p: 3,
        borderRadius: "15px",
        border: "1px  solid gray",
      }}
    >
      <Stack spacing={2}>
        <Box
          sx={{
            backgroundColor: bgIconColor,
            padding: "5px",
            width: "50px",
            height: "50px",

            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={imagePath} />
        </Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle">{detail}</Typography>
      </Stack>
    </Card>
  );
};

export default CardFeature;
