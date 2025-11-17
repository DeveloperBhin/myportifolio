import React from 'react';
import { motion } from 'framer-motion';

const CareerTimeline = () => {
  const experiences = [
    {
      side: 'right',
      title: 'Software Developer',
      company: 'DMG Technology',
      date: 'March 2025 - Current',
      description:
        'Providing seamless IT Solutions integration and transforming innovative ideas into real world projects. One line of code at a time.',
    },
    {
      side: 'left',
      title: 'UI/UX Designer',
      company: 'Qsoft Technology LTD',
      date: 'June 2024 - August 2024',
      description:
        'Led the design of user-friendly interfaces and seamless user experiences for web and mobile applications. Collaborated closely with developers and stakeholders to transform complex requirements into intuitive wireframes, prototypes, and final designs, ensuring both usability and aesthetic appeal.',
    },
    {
      side: 'right',
      title: 'IT Client Support Officer',
      company: 'Nkasi District Office',
      date: 'June 2023 - August 2023',
      description:
        'Providing assistance to clients, ensuring their inquiries and issues are resolved efficiently and professionally.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: 'spring' },
    }),
  };

  return (
    <section className="bg-[#0f1115] text-white py-12 px-4 md:px-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Career History</h2>

      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-white h-full" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className={`relative flex flex-col md:flex-row items-center justify-between mb-20 w-full ${
              exp.side === 'left' ? 'md:flex-row-reverse' : ''
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            variants={cardVariants}
          >
            {/* Timeline node on top of card */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 flex flex-col items-center z-10">
              <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m2 10H7a2 2 0 01-2-2V6a2 2 0 012-2h3l1-2h4l1 2h3a2 2 0 012 2v14a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="text-sm mt-1 text-gray-300">{exp.date}</span>
            </div>

            {/* Card container */}
            <div
              className={`w-full md:w-5/12 flex ${
                exp.side === 'left' ? 'justify-end md:pr-10' : 'justify-start md:pl-10'
              }`}
            >
              <div className="bg-white text-black p-6 rounded-xl shadow-lg max-w-md mt-10">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="font-semibold">{exp.company}</p>
                <p className="text-sm mt-2 leading-relaxed">{exp.description}</p>
              </div>
            </div>

            {/* Balancer column for symmetry */}
            <div className="hidden md:block md:w-5/12" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;
