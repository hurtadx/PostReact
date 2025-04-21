function PostHeader({username, profilePic,timestamp}){
    return(
        <div className="post-header">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <div className="post-info">
                <h3 className="userName">{username}</h3>
                <span className="timestamp">{timestamp}</span>
            </div>
        </div>
    );

}

export default PostHeader;