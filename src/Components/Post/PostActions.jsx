function PostActions({ likes, comments, onLike, onShare }) {
  return (
    <div className="post-actions">
      <div className="post-stats">
        <span className="likes-count"> {likes} Me gusta</span>
        <span className="comments-count"> {comments} comentarios</span>
      </div>
      <div className="action-buttons">
        <button className="action-button" onClick={onLike}>
          <i className="fa-solid fa-thumbs-up"></i> 
          <span className="action-text">Me gusta</span>
        </button>
        <button className="action-button">
          <i className="fa-solid fa-comment"></i> 
          <span className="action-text">Comentar</span>
        </button>
        <button className="action-button" onClick={onShare}>
          <i className="fa-solid fa-share"></i> 
          <span className="action-text">Compartir</span>
        </button>
      </div>
    </div>
  );
}

export default PostActions;