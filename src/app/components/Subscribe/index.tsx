"use client";
import { useState } from "react";
export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission here
  };
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-stone-200 flex max-w-sm mx-auto  mt-10 items-center  justify-between  pl-7 rounded-xl border-2 border-solid border-black"
          >
            <div className="flex gap-2  my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/52738dbc0c80aed70dfcc7a7118bce2e23d8eca5d3b7b8956d513e4253b35deb?"
              />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
                className=" min-w-full bg-transparent border border-gray-200 text-gray-700 p-2 leading-tight focus:outline-none "
              />
            </div>
            <button
              type="submit"
            className="text-white text-center bg-black px-5 py-4 rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
