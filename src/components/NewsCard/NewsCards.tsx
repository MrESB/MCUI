import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Stack, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";

type NewsType = {
  id: String;
  title: string;
  image: string;
};

type OwnProps = {
  data: NewsType;
};

export default function NewsCard({ data }: OwnProps) {
  return (
    <Link href={`/news/${data?.id}`} style={{ textDecoration: "none"}}>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          height: "auto",
          width: 300,
          marginTop: 5,
          marginBottom: 5,
          marginLeft: 5,
          "&:hover": { color: "orange" },
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
              image={data.image}
              alt="Image Alt"
              sx={{
                margin:2,
                height: "auto",
                width: "auto",
                borderRadius: 2,
              }}
            />
          </CardActionArea>
        </Card>
        <Button
          sx={{
            color: "white",
            backgroundColor: "#54C5D0",
            "&:hover": {
              backgroundColor: "orange",
              color: "white",
              boxShadow: 5,
            },
          }}
        >
          <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}>
            <Typography sx={{ padding: 1,}}>
              <AddShoppingCartIcon />
            </Typography>
            <Typography style={{ padding: 1, fontSize: 20, width: "100",}}>
              {data.title}
            </Typography>
          </Stack>
        </Button>
      </Stack>
    </Link>
  );
}
