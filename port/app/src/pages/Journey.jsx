import React from 'react';
import { motion } from 'framer-motion';

const CareerTimeline = () => {
  const experiences = [
    {
      side: 'left',
      title: 'Software Developer',
      company: 'DMG Technology',
      date: 'March 2025 - Current',
      description:
        'Providing seamless IT Solutions integration and transforming innovative ideas into real world projects. One line of code at a time.',
    },
     {
      side: 'right',
      title: 'UI/UX Designer',
      company: 'Qsoft Technology LTD',
      date: 'June 2024 - August 2024',
      description:
      'Led the design of user-friendly interfaces and seamless user experiences for web and mobile applications. Collaborated closely with developers and stakeholders to transform complex requirements into intuitive wireframes, prototypes, and final designs, ensuring both usability and aesthetic appeal.'
 },
    {
      side: 'left',
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
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: 'spring',
      },
    }),
  };

  return (
    <section className="bg-[#0f1115] text-white py-10 px-4 md:px-16">
      <h2 className="text-4xl font-bold mb-12">Career History</h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-white" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="mb-16 flex flex-col md:flex-row items-center justify-between w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            variants={cardVariants}
          >
            {exp.side === 'left' ? (
              <>
                {/* Left side card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white text-black p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="font-semibold">{exp.company}</p>
                    <p className="text-sm mt-2">{exp.description}</p>
                  </div>
                </div>

                {/* Timeline Icon & Date */}
                <div className="flex flex-col items-center w-full md:w-2/12 my-6 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white z-10 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
                  <span className="text-sm mt-2 text-gray-300 text-center">{exp.date}</span>
                </div>

                <div className="w-full md:w-5/12" />
              </>
            ) : (
              <>
                <div className="w-full md:w-5/12" />

                {/* Timeline Icon & Date */}
                <div className="flex flex-col items-center w-full md:w-2/12 my-6 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white z-10 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
                  <span className="text-sm mt-2 text-gray-300 text-center">{exp.date}</span>
                </div>

                {/* Right side card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white text-black p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="font-semibold">{exp.company}</p>
                    <p className="text-sm mt-2">{exp.description}</p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;
