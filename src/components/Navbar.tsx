import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "flex-start", paddingLeft: "2rem" }}>
          <Button color="inherit">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/create">
              Create
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
