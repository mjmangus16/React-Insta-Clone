import React from "react";
import PropTypes from "prop-types";

const styles = {
  commentIcons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10
  },
  likes: {
    padding: 10,
    marginBottom: 0
  }
};

const IconsLikes = ({ likes }) => {
  return (
    <div>
      <div style={styles.commentIcons}>
        <i className="far fa-heart fa-lg" />
        <i className="far fa-comment fa-lg" />
      </div>
      <p style={styles.likes}>
        <strong>{`${likes} likes`}</strong>
      </p>
    </div>
  );
};

IconsLikes.propTypes = {
  likes: PropTypes.number.isRequired
};

export default IconsLikes;
