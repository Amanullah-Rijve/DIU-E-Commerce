import React from "react";

export default function UniMartPrototype() {
  const categories = [
    { name: "Garments" },
    { name: "Gadgets" },
    { name: "Books" },
    { name: "Accessories" }
];

const sampleProducts = [
    { title: "Hoodie", price: "850 BDT", seller: "DIU Fashion Hub" },
    { title: "Phone Stand", price: "250 BDT", seller: "TechZone" },
    { title: "CSE Notes", price: "120 BDT", seller: "StudyStore" }
];

const shops = ["DIU Fashion Hub", "TechZone", "StudyStore"];

return (
    <div className="min-h-screen bg-white p-6">
      {/* HEADER */}
    <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">UniMart – Campus Marketplace</h1>
        <button className="px-4 py-2 bg-green-600 text-white rounded-xl">Login</button>
    </header>

      {/* TAGLINE FOR DEAN */}
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
        <h2 className="text-lg font-semibold">A Central E‑Commerce Platform for All DIU Student Startups</h2>
        <p className="text-sm mt-1 text-gray-600">A trusted campus-only marketplace designed to support and grow DIU entrepreneurs.</p>
    </div>

      {/* CATEGORIES */}
    <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Categories</h2>
        <div className="grid grid-cols-2 gap-4">
        {categories.map((cat, idx) => (
            <div key={idx} className="rounded-2xl shadow p-4 bg-gray-100 cursor-pointer text-center">
            <p className="text-sm font-medium">{cat.name}</p>
            </div>
        ))}
        </div>
    </section>

      {/* PRODUCTS */}
    <section>
        <h2 className="text-xl font-semibold mb-3">Top Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sampleProducts.map((p, idx) => (
            <div key={idx} className="rounded-2xl shadow bg-white p-4">
            <div className="w-full h-32 bg-gray-200 rounded-xl mb-3" />
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.seller}</p>
            <p className="text-md font-bold mt-2">{p.price}</p>
            <button className="w-full mt-3 px-4 py-2 bg-green-600 text-white rounded-xl">View</button>
            </div>
        ))}
        </div>
    </section>

      {/* FEATURED SHOPS */}
    <section className="mt-10 mb-8">
        <h2 className="text-xl font-semibold mb-3">Featured Campus Shops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {shops.map((shop, idx) => (
            <div key={idx} className="rounded-xl shadow bg-white p-5 border">
            <div className="w-full h-24 bg-gray-100 rounded-xl mb-2" />
            <h3 className="text-lg font-bold">{shop}</h3>
            <p className="text-sm text-gray-600">Verified Seller • DIU Student</p>
            <button className="mt-3 w-full px-4 py-2 bg-green-600 text-white rounded-xl">Visit Shop</button>
            </div>
        ))}
        </div>
    </section>

      {/* VALUE PROPOSITION FOR DEAN */}
      <section className="mt-10 mb-10 p-5 bg-gray-50 border rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Why UniMart is Important for DIU</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Promotes DIU student startups and boosts campus entrepreneurship.</li>
          <li>Creates a safe, verified buying environment inside the university.</li>
          <li>Reduces scams and unorganized selling on Facebook.</li>
          <li>Digitizes and organizes student business activities.</li>
          <li>Can be showcased as a flagship university innovation project.</li>
        </ul>
      </section>

      {/* FUTURE EXPANSION */}
    <section className="mt-10 mb-8 p-5 bg-green-50 border border-green-200 rounded-xl">
        <h2 className="text-xl font-semibold mb-3">Future Expansion Possibilities</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Delivery partner app for students.</li>
        <li>AI product recommendations.</li>
        <li>University ID‑based verification system.</li>
        <li>Admin dashboard for university monitoring.</li>
        </ul>
    </section>

    <footer className="mt-12 text-center text-sm text-gray-500">
        Built Prototype for UniMart Showcase
    </footer>
    </div>
);
}
