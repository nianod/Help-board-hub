import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [markdown, setMarkdown] = useState("");

  // Fetch the markdown file when component loads
  useEffect(() => {
    fetch("/src/docs/description.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div data-aos="zoom-out-up" className="text-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Welcome to Help Hub!</h1>
      <p className="mb-8 text-white">Join us as:</p>

      <div className="flex gap-4 justify-center mb-10">
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

      {/* Markdown Description */}
      <div className="text-left max-w-xl mx-auto text-white">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
