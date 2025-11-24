import React from 'react';

const Footer = () => {
  return (
    <>
      <h1 className=" text-3xl sm:text-4xl text-white font-bold p-4">
        Projects:
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3  p-4 text-white gap-4">
     {/* BidhaaLink – Online Product Marketplace */}
<div className="rounded-2xl text-sm sm:text-lg md:text-xl shadow-2xl overflow-auto p-4 hover:shadow-gray-700 transition">
  <p className="text-lg sm:text-2xl md:text-3xl p-2 font-bold">
    BidhaaLink – Online Product Marketplace
  </p>
  <p className="p-2 text-xs sm:text-sm md:text-base leading-relaxed">
    <img src="/Group2.jpg" className="w-full h-auto object-cover mb-2" alt="Slide 2" />
    An eCommerce platform that allows users to buy and sell products online with categories, product listings, cart, and admin dashboard.
    <br /><br />
    Features:
    <ul className="list-disc list-inside mt-2">
      <li>User registration/login</li>
      <li>Product search and filtering</li>
      <li>Cart functionality</li>
      <li>Admin dashboard for managing products and orders</li>
    </ul>
  </p>
</div>

{/* VTrackTZ – Construction & Inventory Tracking System */}
<div className="rounded-2xl text-sm sm:text-lg md:text-xl shadow-2xl overflow-auto p-4 hover:shadow-gray-700 transition">
  <p className="text-lg sm:text-2xl md:text-3xl p-2 font-bold">
    VTrackTZ – Construction & Inventory Tracking System
  </p>
  <p className="p-2 text-xs sm:text-sm md:text-base leading-relaxed">
    <img src="/Group 57.jpg" className="w-full h-auto object-cover mb-2" alt="Slide 2" />
    A system to track materials, project progress, and manage stakeholders like workers, supervisors, and clients in a construction environment.
    <br /><br />
    Features:
    <ul className="list-disc list-inside mt-2">
      <li>Real-time inventory updates</li>
      <li>Role-based user dashboards</li>
      <li>Financial and material tracking reports</li>
    </ul>
  </p>
</div>

{/* PythonMzumbe – Python Learning Hub for Mzumbe Students */}
<div className="rounded-2xl text-sm sm:text-lg md:text-xl shadow-2xl overflow-auto p-4 hover:shadow-gray-700 transition">
  <p className="text-lg sm:text-2xl md:text-3xl p-2 font-bold">
    PythonMzumbe – Python Learning Hub for Mzumbe Students
  </p>
  <p className="p-2 text-xs sm:text-sm md:text-base leading-relaxed">
    <img src="/py.png" className="w-full h-auto object-cover mb-2" alt="Slide 2" />
    PythonMzumbe is an educational platform developed to help Mzumbe University students learn Python interactively. It includes code examples, project-based learning materials, and a discussion board. I integrated markdown support, user comments, and an admin panel for publishing content.
  </p>
</div>

      </div>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3  text-white p-4 gap-4">
     
      <div className="rounded-2xl text-sm sm:text-lg md:text-xl shadow-2xl p-4 overflow-auto hover:shadow-gray-700 transition">
  <p className="text-lg sm:text-2xl md:text-3xl p-2 font-bold">
    MHD – Modern Home Decor Sales Platform
  </p>
  <p className="p-2 text-xs sm:text-sm md:text-base leading-relaxed">
    <img src="/mhd.png" className="w-full h-auto object-cover mb-2" alt="Slide 2" />
    
    MHD (Modern Home Decor) is an online store for selling home decor items like vases, wall art, lights, and furniture. It includes product galleries, order forms, and social media integrations to promote products and receive customer inquiries.
    
    <br /><br />
    Key Features:
    <ul className="list-disc list-inside mt-2">
      <li>Product image galleries</li>
      <li>Decor category filtering</li>
      <li>Direct order/contact buttons</li>
      <li>Mobile-friendly design</li>
    </ul>
  </p>
</div>

      </div>
    </>
  );
};

export default Footer;
