import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import IconsLikes from "./IconsLikes";
import Comments from "./Comments/Comments";
import AddComment from "./AddComment";

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

class CommentContainer extends Component {
  state = {
    comments: [],
    comment: "",
    likes: 0,
    liked: false,
    showComment: false
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

  toggleComment = () => {
    this.setState(() => {
      return { showComment: !this.state.showComment };
    });
  };

  postComment = (event, comment) => {
    event.preventDefault();
    if (comment !== "") {
      this.setState(() => {
        return {
          comments: [
            ...this.state.comments,
            { username: this.props.username, text: comment }
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
    const { comments, comment, likes, liked, showComment } = this.state;
    return (
      <CommentSection>
        <IconsLikes
          likes={likes}
          likePost={this.likePost}
          liked={liked}
          toggleComment={this.toggleComment}
        />
        <Comments comments={comments} />
        <AddComment
          comment={comment}
          createComment={this.createCommentHandler}
          postComment={this.postComment}
          show={showComment}
        />
      </CommentSection>
    );
  }
}

CommentContainer.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired
};

export default CommentContainer;
