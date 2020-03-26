import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0
  },
  actions: {
    display: 'flex'
  },
  clamp: {
    position: 'relative',
    height: '4.5em',
    overflow: 'hidden',
    '&:after': {
      content: '""',
      textAlign: 'right',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '40%',
      height: '1.5em',
      background: `linear-gradient(to right, ${fade(
        theme.palette.background.paper,
        0
      )}, ${theme.palette.background.paper} 50%)`
    }
  }
}));

const PostCard = ({ title, subtitle, text, image, imageHeight, avatar }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader avatar={avatar} title={title} subheader={subtitle} />
      <CardMedia
        image={image}
        title={title}
        className={classes.media}
        style={{ paddingTop: imageHeight }}
      />
      <CardContent>
        <Typography component="p" className={classes.clamp}>
          {text}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <span className="flexSpacer" />
        <Button>More Info</Button>
        <Button>Download</Button>
      </CardActions>
    </Card>
  );
};

PostCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageHeight: PropTypes.number,
  avatar: PropTypes.element
};

export default PostCard;
