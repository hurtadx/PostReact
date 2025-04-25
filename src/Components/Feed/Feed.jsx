import { useState, useEffect } from "react";
import Post from "../Post/Post"; 
import "./Feed.css";

function Feed({ onSharePost }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    useEffect(() => {
        fetchPosts(page);
    }, [page]); 

    useEffect(() => {
        const handleScroll = () => {
            const isNearBottom = window.innerHeight + document.documentElement.scrollTop >= 
                                document.documentElement.offsetHeight - 100;
            
            if (isNearBottom && hasMore && !loading) {
                setPage(prevPage => prevPage + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading, hasMore]); 

    const fetchPosts = async (pageNum) => {
        try {
            setLoading(true);

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=5`);
            const data = await response.json();

            if (data.length === 0) {
                setHasMore(false);
                setLoading(false);
                return;
            }

            const usersResponse = await fetch('https://randomuser.me/api/?results=5');
            const usersData = await usersResponse.json();

            const formattedPosts = data.map((post) => {
                const randomUser = usersData.results[Math.floor(Math.random() * usersData.results.length)];
                const hasImage = Math.random() < 0.5;
                const imageUrl = hasImage ? `https://picsum.photos/seed/${post.id}/800/500` : null;

                return {
                    id: post.id,
                    username: `${randomUser.name.first} ${randomUser.name.last}`,
                    profilePic: randomUser.picture.large,
                    timestamp: `Hace ${Math.floor(Math.random() * 24)} horas`, 
                    text: post.title + '. ' + post.body,
                    image: imageUrl,
                    likes: Math.floor(Math.random() * 1000),
                    comments: []
                };
            });

       
            if (pageNum === 1) {
                setPosts(formattedPosts);
            } else {
                setPosts(prevPosts => [...prevPosts, ...formattedPosts]);
            }
        } catch (err) {
            console.error("Error fetching posts", err);
            setError("No se pudieron cargar las publicaciones");
        } finally {
            setLoading(false);
        }
    };


    const handleLike = (postId) => {
        setPosts(prevPosts => 
            prevPosts.map(post => 
                post.id === postId ? {...post, likes: post.likes + 1} : post
            )
        );
    };

    const handleAddComment = (postId, commentText) => {
        const newComment = {
            id: Date.now(),
            user: 'Usuario Actual', 
            profilePic: "https://randomuser.me/api/portraits/lego/1.jpg",
            text: commentText,
            timestamp: 'Ahora'
        };
        
        setPosts(prevPosts => 
            prevPosts.map(post => 
                post.id === postId 
                    ? {...post, comments: [...post.comments, newComment]} 
                    : post
            )
        );
    };


    const handleSharePost = (postId) => {
    
        const postToShare = posts.find(post => post.id === postId);
        if (postToShare) {
            onSharePost(postToShare);

        }
    };

    return (
        <div className="feed">
            {loading && page === 1 ? (
             
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Cargando Publicaciones...</p>
                </div>
            ) : error ? (
         
                <div className="error-message">
                    <p>{error}</p>
                    <button onClick={() => fetchPosts(1)}>Reintentar</button>
                </div>
            ) : (
             
                <>
                    {posts.map(post => (
                        <Post 
                            key={post.id}
                            id={post.id}
                            username={post.username}
                            profilePic={post.profilePic}
                            timestamp={post.timestamp}
                            text={post.text}
                            image={post.image}
                            likes={post.likes}
                            comments={post.comments}
                            onLike={() => handleLike(post.id)}
                            onAddComment={(text) => handleAddComment(post.id, text)}
                            onSharePost={() => handleSharePost(post.id)} 
                        />
                    ))}
                    
                
                    {loading && page > 1 && (
                        <div className="loading-more">
                            <div className="spinner-small"></div>
                            <p>Cargando más...</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Feed;