"use client";

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log("Newsletter subscription for:", email);
    setEmail("");
  };

  return (
    <div className="py-4 px-4">
      <div className="max-w-2xl mx-auto text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8">
          Great things ahead, be sure to subscribe.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-all transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
