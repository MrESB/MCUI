import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Typography, CardMedia } from "@mui/material";
import { orange } from "@mui/material/colors";

export default function headerAppBar() {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#333", color: "white", direction: "rtl" }}
    >
      <Box display="flex" justifyContent={"space-between"} flexGrow={1}>
        <Toolbar>
          <IconButton size="large" edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <CardMedia
      component= "img"
      sx={{
        height: "34px",
        width: "29px",
      }}
      image = "/img/logo.png"
    >
    </CardMedia>
        </Toolbar>
        <Toolbar>
          <Box>
          
            <Button color="inherit"> <Typography sx={{'&:hover': {color: '#54C5D0', fontWeight: "bold", backgroundColor: 'transparent' }}}> ترابرد </Typography> </Button>
            <IconButton aria-label="Location" color="inherit"
                    sx={{ '&:hover': { color: 'orange', backgroundColor: 'transparent' } }}
>
              <LocationOnIcon />
            </IconButton>   
            <IconButton aria-label="Search" color="inherit" 
             sx={{ '&:hover': { color: 'orange', backgroundColor: 'transparent' } }}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
