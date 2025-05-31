import { useState } from 'react';
import Post from '../Components/post';

const SeekerDashboard = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [posts, setPosts] = useState([])

  return (
    <div className="relative">
      <button
        onClick={() => setShowPostModal(true)}
        className="p-3 bg-red-400 rounded mt-20 m-4 cursor-pointer font-bold hover:bg-red-500 transition-colors"
      >
        Post help request
      </button>

      {showPostModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-30">
            <Post onCancel  = {() => setShowPostModal(false)}/>
         </div>
      )}
      <div>
        {posts.length === 0 ? (
          <p>No posts yest</p>
        ) : (
          posts.map(posts => (
            <div key={posts.id}>
              <h3>{posts.categry}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SeekerDashboard;