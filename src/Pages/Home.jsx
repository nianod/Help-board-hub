import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div data-aos="zoom-out-up" className="text-center p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Help Hub!</h1>
      <p className="mb-8">Join us as:</p>
      <div className="flex gap-4 justify-center">
        <Link 
          to="/signup?role=helper" 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          I'm a Helper
        </Link>
        <Link 
          to="/signup?role=seeker" 
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
        >
          I Need Help
        </Link>
      </div>
    </div>
  );
}