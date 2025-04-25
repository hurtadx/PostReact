import { useState } from 'react'
import './App.css'
import Feed from './Components/Feed/Feed'
import Post from './Components/Post/Post' 

function App() {

  const [sharedPosts, setSharedPosts] = useState([]);
  

  const [activeView, setActiveView] = useState('feed');
  

  const handleSharePost = (post) => {

    if (!sharedPosts.some(sharedPost => sharedPost.id === post.id)) {
      setSharedPosts([...sharedPosts, post]);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <i className="fab fa-facebook"></i>
        </div>
        
        <nav className="nav-tabs">
          <button 
            className={`nav-tab ${activeView === 'feed' ? 'active' : ''}`}
            onClick={() => setActiveView('feed')}
          >
            <i className="fas fa-home"></i> 
            <span className="nav-text">Inicio</span>
          </button>
          <button 
            className={`nav-tab ${activeView === 'shared' ? 'active' : ''}`}
            onClick={() => setActiveView('shared')}
          >
            <i className="fas fa-share-alt"></i> 
            <span className="nav-text">Tus compartidos</span>
            {sharedPosts.length > 0 && (
              <span className="badge">{sharedPosts.length}</span>
            )}
          </button>
        </nav>
        

        <a 
          href="https://github.com/hurtadx/PostReact" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          <i className="fab fa-github"></i>
        </a>
      </header>
      
      <main className='app-content'>
        {activeView === 'feed' ? (
          <Feed onSharePost={handleSharePost} />
        ) : (
          <div className="shared-posts-container">
            <h2>Tus publicaciones compartidas</h2>
            {sharedPosts.length === 0 ? (
              <div className="empty-state">
                <i className="fas fa-share-alt empty-icon"></i>
                <p>Aún no has compartido ninguna publicación</p>
                <button onClick={() => setActiveView('feed')}>Volver al inicio</button>
              </div>
            ) : (
              <div className="feed">
                {sharedPosts.map(post => (
                  <Post 
                    key={post.id}
                    {...post}
                    onSharePost={() => {}} 
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
