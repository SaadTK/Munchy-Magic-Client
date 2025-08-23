import React from "react";

const NewsLetter = () => {
  return (
    <section className="w-full max-w-7xl mx-auto my-24 px-6 md:px-12 flex flex-col md:flex-row items-center bg-white shadow-xl rounded-2xl overflow-hidden">
      {/* Left Image */}
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Newsletter Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full p-10 md:p-14 bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 text-white flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
          Join Our Newsletter
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Get the latest recipes, tips, and exclusive offers from
          <span className="font-semibold text-white"> Munchy Magic</span>.
        </p>

        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-5 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-sm"
            required
          />
          <button
            type="submit"
            className="bg-purple-700 text-white font-semibold rounded-lg px-6 py-3 hover:bg-purple-800 transition duration-300 ease-in-out shadow-md"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-5 text-sm opacity-80">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
