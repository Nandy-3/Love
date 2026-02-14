import HeartCard from "../components/HeartCard";
import second from "../assets/second.jpeg";
import third from "../assets/third.jpeg";
import forth from "../assets/forth.jpeg";

function Memories() {
  return (
    <div className="px-6 md:px-16 py-12 bg-pink-50 min-h-screen overflow-y-hidden">
      
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Love
      </h1>

      <div className="grid md:grid-cols-3 gap-10 ">
        
        <HeartCard 
          title="Love"
          image={second}
          text="The day we first met is still my favorite memory. Everything felt magical and special."
        />

        <HeartCard
          title="Fight"
          image={third}
          text="Even our little fights made us stronger. We learned, we grew, and we loved deeper."
        />

        <HeartCard
          title="Favorite Moment"
          image={forth}
          text="Every laugh, every smile, every small moment with you means the world to me."
        />

      </div>
    </div>
  );
}

export default Memories;
