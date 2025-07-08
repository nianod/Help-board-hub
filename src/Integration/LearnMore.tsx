
import React from "react";

const LearnMore = (): JSX.Element => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-green-400">
      <h1 className="text-3xl font-bold text-blue-500 text-center underline mb-4">How Help Hub Works</h1>
      <p className="mb-4">
        Welcome to Help Hub! A platform that connects <strong>Seekers</strong> who need help, with <strong>Helpers</strong> who can provide it.
      </p>
        <h2 className="text-center font-bold underline text-2xl text-blue-500">How to get started</h2>
      <h2 className="text-xl font-semibold">1. Choose Your Role</h2>
      <p className="">Start on the landing page and choose whether you’re signing up as a Seeker or Helper.</p>

      <h2 className="text-xl font-semibold">2. Sign Up</h2>
      <p className="">Fill out the form with your username, email, and password. Then get redirected to your respective dashboard.</p>

      <h2 className="text-xl font-semibold ">3. Explore the Dashboard</h2>
      <div>
        <div>
            <h1 className="font-bold text-xl underline">Seekers</h1>
            <p>Post your Problem or what you wanna get helped with by filling a form with required Details. <br />
                <span className="mt-5">In fields like contact and location, make sure you provide Accurate details to avoid inconviniences when someone accepts to help you</span>
            </p>
        </div>
        {/* <strong>Helpers</strong> can browse and offer solutions. */}
        </div>
      <p className="mt-8 text-gray-600 italic">Ready to get started?</p>
    </div>
  );
};

export default LearnMore;
