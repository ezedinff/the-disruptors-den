"use client";
import { useState } from "react";
export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission here
  };
  return (
    <div className="bg-[#F0F0E6]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col max-w-4xl items-center mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex items-center mt-3 justify-center mx-auto lg:justify-end">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex items-center border-b-2 border-black py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email Address"
                />
                <button
                  className="flex-shrink-0 bg-black border-black text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
