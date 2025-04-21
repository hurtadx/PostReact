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

  const handleImageUpload = (e) => {
    setPostImage(imageUrl);
  }

  const handleLike = () =>{
    setLikes(likes + 1);
  }

  const handleAddComment = (commentText) => {
    const newComment = {
        id: Date.now(), 
        user: 'Usuario Actual',
        profilePic: '../../assets/IMG/placeholder-male.jpg',
        text: commentText,
        timestamp: 'Ahora'
      };

    setComments([...comments, newComment]);
    setCommentText('');
  }


  return (
    <div className="post">
      <PostHeader 
        username="Usuario Ejemplo" 
        profilePic="../../IMG/placeholder-male.jpg" 
        timestamp="Hace 2 horas" 
      />
      <PostContent 
        text="Este es un ejemplo de post para practicar React" 
        image={handleImageUpload}
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
