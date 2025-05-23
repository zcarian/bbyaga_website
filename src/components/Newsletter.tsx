"use client";

import { useState } from "react";
import Tile from "./Tile";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(
        "https://675n9jfxbb.execute-api.eu-north-1.amazonaws.com/dev/api/newsletterSignup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setStatus("success");
      setMessage("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Failed to subscribe"
      );
    }
  };

  return (
    <div className="py-4 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Tile>
          <h2 className="text-3xl font-bold text-red-700 mb-4">Stay Updated</h2>
          <p className="text-red-700 mb-8">
            Great things ahead, be sure to subscribe.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-red-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-red-700 text-fuchsia-300/60 font-medium rounded-lg hover:bg-red-800 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {message && (
            <p
              className={`mt-4 ${
                status === "error" ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </Tile>
      </div>
    </div>
  );
};

export default Newsletter;
