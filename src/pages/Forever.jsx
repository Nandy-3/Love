import { useState } from "react";

function Forever() {
  const [yes, setYes] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-10">
        Will You Be My Forever?
      </h1>

      {!yes ? (
        <button
          onClick={() => setYes(true)}
          className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg hover:scale-110 transition"
        >
          Yes ❤️
        </button>
      ) : (
        <h2 className="text-3xl mt-6 animate-bounce">
          I Love You Forever ❤️
        </h2>
      )}
    </div>
  );
}

export default Forever;
