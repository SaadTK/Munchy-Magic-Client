import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophia Reyes",
      role: "Home Chef",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "Munchy Magic helped me share my favorite family recipes with a global audience. It’s like my own digital recipe book!",
    },
    {
      name: "Liam Patel",
      role: "Food Blogger",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "The platform is simple, elegant, and made for food lovers. I’ve discovered so many new dishes from amazing creators.",
    },
    {
      name: "Ava Chen",
      role: "Culinary Student",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "Munchy Magic isn’t just a recipe site — it’s a supportive community that fuels my passion for cooking.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-rose-50 to-pink-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Hear directly from the cooks, creators, and food lovers who use Munchy
          Magic.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
