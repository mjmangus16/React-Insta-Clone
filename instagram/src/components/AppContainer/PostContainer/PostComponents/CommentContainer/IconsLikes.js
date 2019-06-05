import React from "react";
import PropTypes from "prop-types";

const styles = {
  commentIcons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10,
    width: 92
  },
  likes: {
    padding: 10,
    marginBottom: 0
  }
};

const IconsLikes = ({ likes, likePost, liked, toggleComment }) => {
  return (
    <div>
      <div style={styles.commentIcons}>
        {!liked ? (
          <i className="far fa-heart fa-lg" onClick={likePost} />
        ) : (
          <i className="fas fa-heart fa-lg" onClick={likePost} />
        )}

        <i className="far fa-comment fa-lg" onClick={toggleComment} />
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
