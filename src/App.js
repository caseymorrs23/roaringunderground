import React from 'react';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1541558969431-1c6b3b7c3af7')] bg-cover bg-center h-screen flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center max-w-xl">
          <h1 className="text-5xl font-bold mb-4">The Roaring Underground</h1>
          <p className="text-lg mb-6">Enumclaw’s hidden gem – a speakeasy, restaurant, and boutique mixology experience.</p>
          <a href="#about" className="px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-400 transition">Discover More</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-300">Step through the boutique in front, where curated barware and artisanal spirits set the stage. Behind a discreet door lies Enumclaw’s finest speakeasy and restaurant – where handcrafted cocktails and chef-inspired plates meet live music and an intimate atmosphere.</p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-6 md:px-20 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Menu</h2>
          <p className="mb-8 text-gray-400">Sip. Savor. Repeat.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Signature Cocktails</h3>
              <p className="text-gray-400">Innovative drinks crafted with precision and flair.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Chef’s Plates</h3>
              <p className="text-gray-400">Seasonal, locally sourced dishes to delight your taste buds.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Desserts</h3>
              <p className="text-gray-400">Indulgent treats to end the night on a sweet note.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="mb-6 text-gray-300">Reserve your table or inquire about private events.</p>
          <a href="mailto:info@roaringunderground.com" className="px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-400 transition">Email Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} The Roaring Underground – Enumclaw, WA
      </footer>
    </div>
  );
}
