import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="bg-base-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">About Munchy Magic</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Munchy Magic, we're passionate about food and the stories it
              tells. Our platform connects home chefs, food lovers, and curious
              cooks from around the world to share, discover, and celebrate
              recipes that bring joy to the table.
            </p>
            <p className="text-gray-500">
              Whether you're here to learn, share, or simply scroll through
              mouth-watering meals, you're in the right place. Let’s make
              cooking magical.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
              alt="About us"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
