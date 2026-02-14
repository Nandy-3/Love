import { useState } from "react";

function HeartCard({ image, title, text }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer transition duration-500 transform hover:scale-105 "
    >
      {!open ? (
        <div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col items-center">
          <span className="text-5xl animate-pulse">💖</span>
          <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        </div>
      ) : (
        <div className="bg-white p-3 rounded-2xl shadow-2xl animate-fadeIn">
          <img src={image} className="rounded-xl mb-4 h-60 object-cover mx-auto" />
          <p className="text-gray-700">{text}</p>
        </div>
      )}
    </div>
  );
}

export default HeartCard;
