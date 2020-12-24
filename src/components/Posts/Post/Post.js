import React from "react";
//material ui
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyles } from "./style";
//moment
import moment from "moment";

const Post = (props) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.author}
            </Avatar>
          }
          title={props.author}
          subheader={moment(props.createdAt).fromNow()}
        />
        <CardMedia
          className={classes.media}
          image={props.selectedFile}
          title={props.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.tags && props.tags.map((tag) => `# ${tag}`)}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            {props.likeCount}
            <FavoriteIcon />
          </IconButton>
          <Button
            size="small"
            color="primary"
            onClick={() => props.setCurrentId(props._id)}
          >
            Edit
          </Button>
          <Button size="small" color="primary">
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
