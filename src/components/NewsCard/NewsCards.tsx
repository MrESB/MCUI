import { FC } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Margin, WidthFull } from "@mui/icons-material";
import { Stack, autocompleteClasses, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type NewsType = {
  title: string;
};

type OwnProps = {
  data: NewsType;
};

export default function ActionAreaCard() {
  const NewsCard : FC<OwnProps> = (data) => {
      const news1 = News[0];
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        height: "auto",
        width: 300,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        "&:hover": { color: "orange",},
      }}
    >
      <Card
        sx={{
          "&:hover": { color: "orange", boxShadow: 5 },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
            sx={{
              margin: 5,
              borderRadius: 2,
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button sx={{ 
                    color: "white",
                    backgroundColor: "#54C5D0",
                    "&:hover": { backgroundColor: "orange", color: "white", boxShadow: 5 }}}>
        <Stack direction={"row"} spacing={18}>
          <Typography sx={{padding: 1}}>
            <AddShoppingCartIcon />
          </Typography>
          <Typography sx={{padding: 1, fontSize: 20, width:"auto" }}>خرید گوشی</Typography>
        </Stack>
      </Button>
    </Stack>
  );
}
}
