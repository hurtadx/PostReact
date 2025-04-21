function PostActions({ likes, comments, onLike }) {
  return (
    <div className="post-actions">
      <div className="post-stats">
        <span className="likes-count">👍 {likes} Me gusta</span>
        <span className="comments-count"> {comments} comentarios</span>
      </div>
      <div className="action-buttons">
        <button className="action-button" onClick={onLike}>
          👍 Me gusta
        </button>
        <button className="action-button">
          💬 Comentar
        </button>
        <button className="action-button">
          🔄 Compartir
        </button>
      </div>
    </div>
  );
}

export default PostActions;