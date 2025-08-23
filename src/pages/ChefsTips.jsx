import React from "react";

const ChefsTips = () => {
  return (
    <section className="bg-gradient-to-br from-rose-100 via-pink-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Chef’s Tips</h2>
        <p className="text-lg text-gray-600 mb-12">
          Upgrade your cooking game with expert-approved advice from seasoned
          chefs.
        </p>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">
              ✨ Balance Your Flavors
            </h4>
            <p className="text-gray-600">
              Great dishes come from a balance of salty, sweet, sour, and umami.
              Taste constantly and adjust.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">
              🔪 Sharp Knives Matter
            </h4>
            <p className="text-gray-600">
              A sharp knife is safer and more efficient. Invest in quality
              knives and learn basic knife skills.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">
              🔥 Don’t Crowd the Pan
            </h4>
            <p className="text-gray-600">
              Overcrowding lowers the pan’s temperature and causes steaming
              instead of searing. Give your food space!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsTips;
