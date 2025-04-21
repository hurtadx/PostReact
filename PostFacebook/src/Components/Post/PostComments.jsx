import { useState } from "react";

function PostComments({ comments, onAddComment }) {
    const [newComment, setNewComment] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()){
            onAddComment(newComment);
            setNewComment("");
        }
    }




  return (
    <div className="post-comments">
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <img src={comment.profilePic} alt="Profile" className="comment-profile-pic" />
            <div className="comment-content">
              <h4 className="comment-user">{comment.user}</h4>
              <p className="comment-text">{comment.text}</p>
              <div className="comment-actions">
                <button className="comment-action">Me gusta</button>
                <button className="comment-action">Responder</button>
                <span className="comment-time">{comment.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <form className="comment-form" onSubmit={handleSubmit}>
        <img src="../../IMG/placeholder-male.jpg" alt="Your profile" className="comment-profile-pic" />
        <input
          type="text"
          className="comment-input"
          placeholder="Escribe un comentario..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" className="comment-submit">Enviar</button>
      </form>
    </div>
  );
}

export default PostComments;