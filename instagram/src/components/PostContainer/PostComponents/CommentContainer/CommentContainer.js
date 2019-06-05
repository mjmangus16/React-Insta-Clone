import React, { Component } from "react";
import PropTypes from "prop-types";

import IconsLikes from "./IconsLikes";
import Comments from "./Comments/Comments";
import AddComment from "./AddComment";

const styles = {
  commentSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }
};

class CommentContainer extends Component {
  state = {
    comments: [],
    comment: "",
    likes: 0,
    liked: false
  };

  componentDidMount() {
    this.setState(() => {
      return { comments: [...this.props.comments], likes: this.props.likes };
    });
  }

  likePost = () => {
    if (!this.state.liked) {
      this.setState(() => {
        return { likes: this.state.likes + 1, liked: !this.state.liked };
      });
    } else {
      this.setState(() => {
        return { likes: this.state.likes - 1, liked: !this.state.liked };
      });
    }
  };

  postComment = (event, comment) => {
    event.preventDefault();
    if (comment !== "") {
      this.setState(() => {
        return {
          comments: [
            ...this.state.comments,
            { username: "Mike", text: comment }
          ],
          comment: ""
        };
      });
    }
  };

  createCommentHandler = value => {
    this.setState(() => {
      return {
        comment: value
      };
    });
  };

  render() {
    let { comments, comment, likes, liked } = this.state;
    return (
      <div style={styles.commentSection}>
        <IconsLikes likes={likes} likePost={this.likePost} liked={liked} />
        <Comments comments={comments} />
        <AddComment
          comment={comment}
          createComment={this.createCommentHandler}
          postComment={this.postComment}
        />
      </div>
    );
  }
}

CommentContainer.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired
};

export default CommentContainer;
