import { Box, Link, Button } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" gap={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <img src="/assets/images/logo.png" />
          <h4>Tasker</h4>
        </Box>
        <Link href="#" underline="none">
          Products
        </Link>
        <Link underline="none">Resources</Link>
        <Link underline="none">Enterprise</Link>
        <Link underline="none">Pricing</Link>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Link underline="none">Contact Sales</Link>
        <Link underline="none">Login</Link>
        <Button variant="contained">Get Start</Button>
      </Box>
    </Box>
  );
};

export default Header;
