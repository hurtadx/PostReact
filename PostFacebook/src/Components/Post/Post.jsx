import { useState } from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostActions from './PostActions';
import PostComments from './PostComments';
import './Post.css';

function Post() {
  


  const [likes, setLikes] = useState(0);
  const [postImage, setPostImage] = useState(null);
  const [postText, setPostText] = useState('Este es un ejemplo de post para practicar React');
  const [comments, setComments] = useState([]);

  const handleImageUpload = (imageUrl) => {
    setPostImage(imageUrl);
  }

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleAddComment = (commentText) => {
    const newComment = {
        id: Date.now(), 
        user: 'Usuario Actual',
        profilePic: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
        text: commentText,
        timestamp: 'Ahora'
      };

    setComments([...comments, newComment]);
  }

  return (
    <div className="post">
      <PostHeader 
        username="Usuario Ejemplo" 
        profilePic="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" 
        timestamp="Hace 2 horas" 
      />
      <PostContent 
        text={postText}
        image={postImage}
        onImageUpload={handleImageUpload}
      />
      <PostActions 
        likes={likes} 
        comments={comments.length} 
        onLike={handleLike}
      />
      <PostComments 
        comments={comments} 
        onAddComment={handleAddComment}
      />
    </div>
  );
}

export default Post;
