import React from 'react';

const Footer = () => {
  return (
    <>
      <h1 className=" text-3xl sm:text-4xl text-white font-bold p-4">
        Expertise (Tools & Tech):
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3  p-4 text-white gap-4">
      <div className="border rounded-2xl text-sm sm:text-lg md:text-xl lg:text-2xl shadow-2xl overflow-auto p-4 hover:shadow-gray-700 transition">
  <p className="text-lg sm:text-2xl md:text-3xl p-2 font-semibold">
    🧑‍💻 Web Development (Frontend & Backend)
  </p>

  <p className="p-2 text-xs sm:text-sm md:text-base leading-relaxed">
    Skilled in building scalable and user-friendly web applications using Django (Python) for backend development and React/React Native for frontend and mobile interfaces. Proficient in Bootstrap and Tailwind CSS for responsive design and clean UI/UX.
  </p>

  <p className="mt-4 font-semibold text-base sm:text-lg md:text-xl">Tools:</p>

  <div className="flex flex-wrap gap-2 mt-2">
    {[
      "Django",
      "Python",
      "React",
      "React Native",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
    ].map((dev) => (
      <span
        key={dev}
        className="bg-gray-800 rounded-full text-xs sm:text-sm md:text-base py-1 px-3"
      >
        {dev}
      </span>
    ))}
  </div>
</div>


        {/* Database Management Card */}
<div className="border rounded-2xl text-sm sm:text-lg md:text-xl shadow-2xl p-4 hover:shadow-gray-700 transition">
  <p className="text-lg sm:text-2xl md:text-3xl p-2 font-semibold">
    ⛁ Database Management
  </p>

  <p className="p-2 text-xs sm:text-sm md:text-base leading-relaxed">
    Experienced in working with relational databases such as PostgreSQL and
    MySQL. Able to design efficient database schemas and implement CRUD
    operations securely.
  </p>

  <p className="mt-4 font-semibold text-base sm:text-lg md:text-xl">Tools:</p>
  <div className="flex flex-wrap gap-2 mt-2">
    {["PostgreSQL", "MySQL", "SQLite"].map((dat) => (
      <span
        key={dat}
        className="bg-gray-800 rounded-full text-xs sm:text-sm md:text-base py-1 px-3"
      >
        {dat}
      </span>
    ))}
  </div>
</div>

{/* IoT Systems Integration Card */}
<div className="border rounded-2xl text-sm sm:text-lg md:text-xl shadow-2xl p-4 hover:shadow-gray-700 transition">
  <p className="text-lg sm:text-2xl md:text-3xl p-2 font-semibold">
    ⚙ IoT Systems Integration
  </p>

  <p className="p-2 text-xs sm:text-sm md:text-base leading-relaxed">
    Knowledgeable in developing IoT-based solutions like smart gas cookers,
    integrating sensors, and automating systems using microcontrollers to
    improve safety and energy efficiency.
  </p>

  <p className="mt-4 font-semibold text-base sm:text-lg md:text-xl">
    Tech Stack:
  </p>
  <div className="flex flex-wrap gap-2 mt-2">
    {["Arduino", "ESP8266/ESP32", "Python", "Raspberry Pi"].map((iot) => (
      <span
        key={iot}
        className="bg-gray-800 rounded-full text-xs sm:text-sm md:text-base py-1 px-3"
      >
        {iot}
      </span>
    ))}
  </div>
</div>

      </div>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3  text-white p-4 gap-4">
     {/* Machine Learning & Algorithms */}
<div className="border rounded-2xl text-sm sm:text-lg md:text-xl shadow-2xl p-4 hover:shadow-gray-700 transition">
  <p className="text-lg sm:text-2xl md:text-3xl p-2 font-semibold">
    🤖 Machine Learning & Algorithms
  </p>
  <p className="p-2 text-xs sm:text-sm md:text-base leading-relaxed">
    Familiar with fundamental machine learning algorithms and their practical implementation. I apply these algorithms to solve real-world problems, with hands-on experience in data processing and algorithm optimization.
  </p>
  <p className="mt-4 font-semibold text-base sm:text-lg md:text-xl">Tools:</p>
  <div className="flex flex-wrap gap-2 mt-2">
    {[
      "Django",
      "Python",
      "React",
      "React Native",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
    ].map((tech) => (
      <span
        key={tech}
        className="bg-gray-800 rounded-full text-xs sm:text-sm md:text-base py-1 px-3"
      >
        {tech}
      </span>
    ))}
  </div>
</div>

{/* Git & Version Control */}
<div className="border rounded-2xl text-sm sm:text-lg md:text-xl shadow-2xl p-4 hover:shadow-gray-700 transition">
  <p className="text-lg sm:text-2xl md:text-3xl p-2 font-semibold">
    🔧 Git & Version Control
  </p>
  <p className="p-2 text-xs sm:text-sm md:text-base leading-relaxed">
    Proficient in using Git and GitHub for collaborative development, including
    cloning, pushing updates, and managing repositories.
  </p>
  <p className="mt-4 font-semibold text-base sm:text-lg md:text-xl">Tools:</p>
  <div className="flex flex-wrap gap-2 mt-2">
    {["Git", "GitHub", "GitLab", "CLI & GUI Clients"].map((git) => (
      <span
        key={git}
        className="bg-gray-800 rounded-full text-xs sm:text-sm md:text-base py-1 px-3"
      >
        {git}
      </span>
    ))}
  </div>
</div>

      </div>
    </>
  );
};

export default Footer;
