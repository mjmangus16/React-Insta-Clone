import React, { Component } from "react";

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
    comment: ""
  };

  componentDidMount() {
    this.setState(() => {
      return { comments: [...this.props.comments] };
    });
  }

  addComment = comment => {
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
    const { likes } = this.props;
    let { comments, comment } = this.state;
    return (
      <div style={styles.commentSection}>
        <IconsLikes likes={likes} />
        <Comments comments={comments} />
        <AddComment
          comment={comment}
          createComment={this.createCommentHandler}
          postComment={this.addComment}
        />
      </div>
    );
  }
}

export default CommentContainer;
