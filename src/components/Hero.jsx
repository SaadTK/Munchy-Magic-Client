import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slider - background images */}
      <Slider {...settings} className="absolute inset-0 z-0 h-full">
        {slides.map((slide) => (
          <div key={slide.id}>
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0  bg-opacity-50">
              {/* Text content on top */}
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 text-white max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Discover{" "}
                  <span className="text-rose-400">
                    <Typewriter
                      words={["Flavors.", "Inspiration.", "Magic."]}
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </h1>
                <p className="text-lg md:text-xl mb-10 text-gray-200">
                  Share your culinary creations and explore dishes from around
                  the world on Munchy Magic.
                </p>
                <div className="flex gap-6">
                  <Link to="/add-recipe">
                    <button className="btn btn-primary px-8">
                      Share a Recipe
                    </button>
                  </Link>
                  <Link to="/all-recipes">
                    <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black px-8">
                      Browse Recipes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
