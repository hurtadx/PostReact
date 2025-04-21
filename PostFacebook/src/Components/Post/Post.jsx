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

  const handleLike = () =>{
    setLikes(likes + 1);
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
        image={null}
      />
      <PostActions 
        likes={likes} 
        comments={0} 
        onLike={handleLike}
      />
      <PostComments 
        comments={[]} 
      />
    </div>
  );
}

export default Post;
