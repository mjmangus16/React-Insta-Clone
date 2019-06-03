import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand, Form, FormGroup, Input } from "reactstrap";

import Comment from "../Comment/Comment";

const styles = {
  container: {
    maxWidth: 500,
    margin: "25px auto",
    border: "1px solid lightGrey"
  },
  header: {
    display: "flex",
    alignItems: "center"
  },
  thumbnail: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    margin: 10,
    textAlign: "left"
  },
  username: {
    margin: 0
  },
  image: {
    width: "100%"
  },
  commentSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  commentIcons: {},
  likes: {
    padding: 10
  },
  form: {
    width: "calc(100% - 20px)",
    borderTop: "1px solid lightGrey",
    margin: "auto"
  },
  formGroup: {
    margin: 0,
    display: "flex"
  },
  input: {
    border: "none",
    width: "80%"
  },
  post: {
    width: "20%",
    padding: "0px 10px"
  }
};

class PostContainer extends Component {
  state = {
    comments: [],
    comment: ""
  };

  componentDidMount() {
    this.setState(() => {
      return { comments: [...this.props.data.comments] };
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

  comment = value => {
    this.setState(() => {
      return {
        comment: value
      };
    });
  };

  render() {
    const { data } = this.props;
    let { comments, comment } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <img style={styles.thumbnail} src={data.thumbnailUrl} />
          <p style={styles.username}>{data.username}</p>
        </div>
        <img style={styles.image} src={data.imageUrl} />
        <div style={styles.commentSection}>
          <div style={styles.commentIcons} />
          <p style={styles.likes}>
            <strong>{`${data.likes} likes`}</strong>
          </p>
          {comments.map((comment, i) => (
            <Comment comment={comment} key={`comment-${i}`} />
          ))}
          <div style={styles.form}>
            <FormGroup style={styles.formGroup}>
              <Input
                type="text"
                name="comment"
                id="comment-input"
                placeholder="Add a comment..."
                style={styles.input}
                value={comment}
                onChange={e => this.comment(e.target.value)}
              />
              <button
                style={styles.post}
                onClick={() => this.addComment(comment)}
              >
                POST
              </button>
            </FormGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default PostContainer;
