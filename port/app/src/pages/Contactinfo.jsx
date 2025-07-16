import React, { useEffect, useState } from "react";

const MailList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/MailView/")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-[#0c111b] text-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Received Messages 📩</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg, index) => (
            <li key={index} className="border-b border-gray-600 pb-2">
              <p><strong>Email:</strong> {msg.mail}</p>
              <p><strong>Comment:</strong> {msg.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MailList;
