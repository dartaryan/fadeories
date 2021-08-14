import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";


const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>

      <div>
        <Typography className={classes.title2}>{post.title}</Typography>
      </div>
      <CardContent>
        <Typography className={classes.message}>{post.message}</Typography>
        <Typography className={classes.details}>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button className={classes.buttons} size="medium" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="medium" /> · Revive · [{post.likeCount}]
        </Button>
        <Button className={classes.buttons} size="medium" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="medium" />· Scatter ·
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
