import React from "react";

const LearnMore = (): JSX.Element => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">How Help Hub Works</h1>
      <p className="mb-4">
        Welcome to Help Hub — a platform that connects <strong>Seekers</strong> who need help, with <strong>Helpers</strong> who can provide it.
      </p>
        <h2>How to get started</h2>
      <h2 className="text-2xl font-semibold">1. Choose Your Role</h2>
      <p className="">Start on the landing page and choose whether you’re signing up as a Seeker or Helper.</p>

      <h2 className="text-2xl font-semibold">2. Sign Up</h2>
      <p className="">Fill out the form with your username, email, and password. Then get redirected to your respective dashboard.</p>

      <h2 className="text-2xl font-semibold ">3. Explore the Dashboard</h2>
      <p className="">
        - <strong>Seekers</strong> can post their problems.<br/>
        - <strong>Helpers</strong> can browse and offer solutions.
      </p>

      <p className="mt-8 text-gray-600 italic">Ready to get started?</p>
    </div>
  );
};

export default LearnMore;
