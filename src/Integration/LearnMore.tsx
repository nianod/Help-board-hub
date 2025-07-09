import { Link } from "react-router-dom";
import steps from "./Giudes";

const LearnMore = (): JSX.Element => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-green-400">
      <h1 className="text-3xl font-bold text-blue-500 text-center underline mb-4">
        How Help Hub Works
      </h1>

      <p className="mb-4">
        Welcome to Help Hub! A platform that connects <strong>Seekers</strong> who need help, with <strong>Helpers</strong> who can provide it.
      </p>

      <h2 className="text-center font-bold underline text-2xl text-blue-500 mt-6 mb-2">
        How to Get Started
      </h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">1. Choose Your Role</h3>
        <p>Start on the landing page and choose whether you’re signing up as a Seeker or Helper.</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">2. Sign Up</h3>
        <p>Fill out the form with your username, email, and password. Then get redirected to your respective dashboard.</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">3. Explore the Dashboard</h3>

        <article className="mb-4">
          <h4 className="font-bold text-lg underline">Seekers</h4>
          <p>
            Post your problem or what you want help with by filling out a form with the required details.
            <br />
            <span className="mt-5 block">
              In fields like contact and location, make sure you provide accurate details to avoid inconveniences when someone accepts to help you.
            </span>
          </p>
        </article>

        <article>
          <h4 className="font-bold text-lg underline">Helpers</h4>
          <p>
            Browse the posted help requests and spot the ones you can assist with.
            <br />
            <span>
              Accept it and contact the owner through the contact method they provided.
              <br />
              <i className="text-blue-500">
                - On accepting, they can follow up through the email you used while signing up (make sure it's a real one).
              </i>
            </span>
          </p>
        </article>
        <div className="mt-5">
            <p className="text-xl font-bold underline">Help Tokens</p>
            <span>To be rewarded on your gesture of kindness, you can negotiate on that since. Apparently the system doen not support discourage neither encourage that.</span> <br />
            <i className="text-blue-500">- On arriving on win win situation, Appreciate each other in ways of your wishes</i>
        </div>
      </section>
      <span className="text-red-500">*{steps.step1}*</span>

      <p className="mt-8 text-gray-300 italic text-center">
        Ready to get started?
        <Link to="/" className="text-blue-500 hover:underline hover:text-blue-300"> Click-here</Link>
      </p>
    </div>
  );
};

export default LearnMore;
