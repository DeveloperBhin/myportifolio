import React from 'react';

const Footer = () => {
  return (
    <>
      <h1 className=" text-3xl sm:text-4xl text-white font-bold p-4">
        Expertise (Tools & Tech):
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3  p-4 text-white gap-4">
        <div className="border rounded-2xl text-lg sm:text-2xl shadow-2xl overflow-auto p-4">
          <p className="text-2xl sm:text-3xl p-2">🧑‍💻 Web Development (Frontend & Backend)</p>
          <p className="p-2">
            Skilled in building scalable and user-friendly web applications using Django (Python) for backend development and React/React Native for frontend and mobile interfaces. Proficient in Bootstrap for responsive design and clean UI/UX.
          </p>
            <p className="mt-4 font-semibold text-xl">Tools:</p>
            <div className='flex flex-wrap gap-2'>
              {['Django','Python','React','React',' Native','Boostrap','tailwind CSS','Jvascript','HTML','CSS'].map((dev)=>(
                <span
                key={dev}
                className='bg-gray-800 rounded-full text-sm sm:text-base py-1 px-3'>
{dev}
                </span>
              ))}
            </div>
        
        </div>

        <div className="border rounded-2xl text-lg sm:text-2xl shadow-2xl p-4">
          <p className="text-2xl sm:text-3xl p-2">⛁ Database Management</p>
          <p className="p-2">
            Experienced in working with relational databases such as PostgreSQL and MySQL. Able to design efficient database schemas and implement CRUD operations securely.
          </p>
           <p className="mt-4 font-semibold text-xl">Tools:</p>
              <div className='flex flex-wrap gap-2'>
              {['PostgreSQL','MySQL','SQLite'].map((dat)=>(
                <span
                key={dat}
                className='bg-gray-800 rounded-full text-sm sm:text-base py-1 px-3'>
{dat}
                </span>
              ))}
            </div>
         
        </div>

        <div className="border rounded-2xl text-lg sm:text-2xl shadow-2xl p-4">
          <p className="text-2xl sm:text-3xl p-2">⚙ IoT Systems Integration</p>
          <p className="p-2">
            Knowledgeable in developing IoT-based solutions like smart gas cookers, integrating sensors, and automating systems using microcontrollers to improve safety and energy efficiency.
          </p>
          <p className="mt-4 font-semibold text-xl">Tech Stack:</p>
             <div className='flex flex-wrap gap-2'>
              {['Arduino','ESP8266/ESP32','Python','Raspberry Pi'].map((iot)=>(
                <span
                key={iot}
                className='bg-gray-800 rounded-full text-sm sm:text-base py-1 px-3'>
{iot}
                </span>
              ))}
            </div>
         
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3  text-white p-4 gap-4">
        <div className="border rounded-2xl text-lg sm:text-2xl shadow-2xl p-4">
          <p className="text-2xl sm:text-3xl p-2"> Machine Learning & Algorithms</p>
          <p className="p-2">
        
Familiar with fundamental machine learning algorithms and their practical implementation. I apply these algorithms to solve real-world problems, with hands-on experience in data processing and algorithm optimization.





 </p>
 <p className="mt-4 font-semibold text-xl">Tools:</p>
           <div className="flex flex-wrap gap-2">
            {['Django', 'Python', 'React', 'React Native', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'].map((tech) => (
              <span
                key={tech}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm sm:text-base"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="border rounded-2xl text-lg sm:text-2xl shadow-2xl p-4">
          <p className="text-2xl sm:text-3xl p-2">🔧 Git & Version Control</p>
          <p className="p-2">
            Proficient in using Git and GitHub for collaborative development, including cloning, pushing updates, and managing repositories.
          </p>
           <p className="mt-4 font-semibold text-xl">Tools:</p>
           <div className='flex flex-gap gap-2'>
            {['Git','Github','GitLab','CLI& GUI clients'].map((git)=><span
            key={git}
            className='bg-gray-800 px-3 py-1 rounded-full text-sm sm:text-base'>
              {git}
            </span>)}
           </div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
