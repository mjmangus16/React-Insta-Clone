import React from "react";

const styles = {
  commentIcons: {},
  likes: {
    padding: 10
  }
};

const IconsLikes = ({ likes }) => {
  return (
    <div>
      <div style={styles.commentIcons} />
      <p style={styles.likes}>
        <strong>{`${likes} likes`}</strong>
      </p>
    </div>
  );
};

export default IconsLikes;
