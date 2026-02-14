import { useState } from "react";
import first from '../assets/first.jpeg'

function HeartCard({ title, image, text }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center ">
      {/* Heart Button */}
      {!open && (
        <div
          onClick={() => setOpen(true)}
          className="cursor-pointer text-6xl animate-pulse hover:scale-125 transition duration-300 pt-50"
        >
          ❤️
          <p className="text-lg mt-2 font-semibold text-pink-600">
            Click Me...
          </p>
        </div>
      )}

      {/* Revealed Content */}
      {open && (
        <div className="mt-6 bg-white p-6 rounded-2xl shadow-2xl max-w-sm max-h-200px text-center animate-fadeIn">
          <img
            src={first}
            alt="memory"
            className="rounded-xl mb-4 shadow-lg h-60 object-cover mx-auto"
          />
          <p className="text-gray-700 font-medium">“Happy Valentine’s Day, My love❤️.You are my forever Valentine, until our last breath.” 💖</p>
        </div>
      )}
    </div>
  );
}

export default HeartCard;
