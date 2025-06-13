import { useLocation } from 'react-router-dom';

const View = () => {
  const location = useLocation();
  const post = location.state?.post;

  if (!post) {
    return <p className="text-center text-red-500">No post data found!</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white mt-20 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Category: {post.category}</h1>
      <span className='underline italic'>Description:</span>
      <p className="text-gray-700 mb-3">{post.text}</p>
      <p>Author: {post.user_name}</p>
      <p className="text-sm text-gray-500">Contact via: {post.contact_method} - {post.contact_detail}</p>
      <p className="text-sm text-gray-400 mt-2">Posted on: {new Date(post.created_at).toLocaleString()}</p>
    </div>
  );
};

export default View;
