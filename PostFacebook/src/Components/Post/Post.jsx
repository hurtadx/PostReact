import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostActions from './PostActions';
import PostComments from './PostComments';
import './Post.css';

function Post({
  id,                
  username,          
  profilePic,
  timestamp,
  text,
  image,
  likes,             
  comments,
  onLike,            
  onAddComment,
  onImageUpload,
  onSharePost
}) {

  const handleShareClick = () => {
    if (onSharePost) {
      onSharePost();
    }
  }

  const handleLikeClick = () => {
    onLike();
  }

  const handleCommentSubmit = (commentText) => {
    onAddComment(commentText); 
  }
  
  return (
    <div className="post">
      <PostHeader username={username} profilePic={profilePic} timestamp={timestamp} />
      <PostContent text={text} image={image} onImageUpload={onImageUpload} />
      <PostActions likes={likes} comments={comments.length} onLike={handleLikeClick}  onShare={handleShareClick} />
      <PostComments comments={comments} onAddComment={handleCommentSubmit} />
    </div>
  );
}

export default Post;
