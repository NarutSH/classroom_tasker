import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const RegisterBanner = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Stack spacing={3} height="100%" justifyContent="center">
          <Typography variant="h3">
            Tasker brings all your tasks Teams & tools together
          </Typography>
          <Typography variant="body1">
            Keep everything in the same place—even if your team isn’t.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={8}>
              <TextField variant="outlined" label="email" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                style={{
                  height: "50px",
                }}
              >
                Sign up it's free
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <img src="/assets/images/register.png" />
      </Grid>
    </Grid>
  );
};

export default RegisterBanner;
