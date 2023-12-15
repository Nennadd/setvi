import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";

type CardProps = {
  title: string;
  body: string;
  img: string;
};

const CardComponent = ({ title, body, img }: CardProps) => {
  return (
    <Card sx={{ width: 220 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            color="primary"
            fontSize={20}
            textTransform="capitalize"
          >
            {title ? title.substring(0, 15) : <Skeleton />}
          </Typography>
          <Divider />
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: "0.5rem" }}
          >
            {body ? body.substring(0, 35) + "..." : <Skeleton />}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
