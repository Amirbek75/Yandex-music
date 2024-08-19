import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // react-icons kutubxonasidan yurak ikonkalari

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={toggleLike} style={styles.button}>
      {liked ? <FaHeart style={styles.iconFilled} /> : <FaRegHeart style={styles.icon} />}
    </button>
  );
}

const styles = {
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    padding: '10px',
  },
  icon: {
    color: '#ccc',
    fontSize: '15px',
    transition: 'color 0.3s ease',
  },
  iconFilled: {
    color: '#ff3b30',
    fontSize: '20px',
    transition: 'color 0.3s ease',
  }
};

export default LikeButton;
