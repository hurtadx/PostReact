function PostHeader({username, profilePic, timestamp}){
   
    const handleImageError = (e) => {
        e.target.src = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
    };

    return(
        <div className="post-header">
            <img 
                src={profilePic} 
                alt="Profile" 
                className="profile-pic" 
                onError={handleImageError}
            />
            <div className="post-info">
                <h3 className="username">{username}</h3>
                <span className="timestamp">{timestamp}</span>
            </div>
            <button className="post-header-options">
                <i className="fa-solid fa-ellipsis"></i>
            </button>
        </div>
    );
}

export default PostHeader;