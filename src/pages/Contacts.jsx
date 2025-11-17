import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      form.current,
      'your_user_id'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="p-6 max-w-md mx-auto bg-[#0c111b] rounded shadow-md ">
      <h2 className="text-xl font-bold mb-4 text-white">Send an Email</h2>

      <input type="text" name="user_name" placeholder="Your Name" className="w-full mb-3 p-2 border rounded" required />
      <input type="email" name="user_email" placeholder="Your Email" className="w-full mb-3 p-2 border rounded" required />
      <textarea name="message" placeholder="Your Message" className="w-full mb-3 p-2 border rounded text-white" required></textarea>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
    </form>
  );
};

export default EmailForm;
