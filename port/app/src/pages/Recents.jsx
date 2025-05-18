import React from 'react';

const Footer = () => {
  return (
    <>
      <h1 className=" text-3xl sm:text-4xl text-white font-bold p-4">
        Projects:
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  p-4 text-white gap-4">
        <div className=" rounded-2xl text-lg sm:text-2xl shadow-2xl overflow-auto p-4">
          <p className="text-2xl font-bold sm:text-3xl p-2"> BidhaaLink – Online Product Marketplace</p>
          <p className="p-2">
              <img src='/Group2.jpg' className='w-full h-full object-cover' alt="Slide 2" />
   
     
 An eCommerce platform that allows users to buy and sell products online with categories, product listings, cart, and admin dashboard.
Features:

User registration/login

Product search and filtering

Cart functionality

Admin dashboard for managing products and orders </p>
      
        
        </div>

          <div className=" rounded-2xl text-lg sm:text-2xl shadow-2xl overflow-auto p-4">
          <p className="text-2xl font-bold sm:text-3xl p-2">VTrackTZ – Construction & Inventory Tracking System</p>
          <p className="p-2">
                <img src='/Group 57.jpg' className='w-full h-full object-cover' alt="Slide 2" />
   
     
 A system to track materials, project progress, and manage stakeholders like workers, supervisors, and clients in a construction environment.
Features:

Real-time inventory updates

Role-based user dashboards

Financial and material tracking reports </p>
      
        
        </div>

        <div className=" rounded-2xl text-lg sm:text-2xl shadow-2xl overflow-auto p-4">
          <p className="text-2xl font-bold sm:text-3xl p-2"> PythonMzumbe – Python Learning Hub for Mzumbe Students</p>
          <p className="p-2">
      <img src='/py.png' className='w-full h-full object-cover' alt="Slide 2" />
   

PythonMzumbe is an educational platform developed to help Mzumbe University students learn Python interactively. It includes code examples, project-based learning materials, and a discussion board. I integrated markdown support, user comments, and an admin panel for publishing content.

 </p>
      
        
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  text-white p-4 gap-4">
        <div className=" rounded-2xl text-lg sm:text-2xl shadow-2xl p-4">
          <p className="text-2xl sm:text-3xl p-2 font-bold">DMG – Digital Marketing Guide Platform</p>
          <p className="p-2">
        
 <img src='/dmg.png' className='w-full h-full object-cover' alt="Slide 2" />
   

DMG provides guides and resources for digital marketing, including SEO, content marketing, and social media strategies. It includes categorized blog posts, downloadable PDFs, and a content management backend.

 </p>

        </div>

        <div className=" rounded-2xl text-lg sm:text-2xl shadow-2xl p-4">
          <p className="text-2xl sm:text-3xl p-2 font-bold">      MHD – Modern Home Decor Sales Platform</p>
          <p className="p-2">
  
 <img src='/mhd.png' className='w-full h-full object-cover' alt="Slide 2" />
   
MHD (Modern Home Decor) is an online store for selling home decor items like vases, wall art, lights, and furniture. It includes product galleries, order forms, and social media integrations to promote products and receive customer inquiries.

Key Features:

Product image galleries

Decor category filtering

Direct order/contact buttons

Mobile-friendly design</p>       
          
        </div>
      </div>
    </>
  );
};

export default Footer;
