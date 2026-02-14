import HeartCard from "../components/HeartCard";
import fifth from "../assets/fifth.jpeg";
import sixth from "../assets/sixth.jpeg";
import second from "../assets/second.jpeg";
import seventh from "../assets/seventh.jpeg";

function Reasons() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Why I Love You
      </h1>

      <div className="grid md:grid-cols-4 gap-8">
        <HeartCard
          title="Your Smile"
          image={fifth}
          text="Your smile changes my entire day."
        />

        <HeartCard
          title="Your Support"
          image={sixth}
          text="You always believe in me."
        />

        <HeartCard
          title="Your love"
          image={second}
          text="Your love means everything to me."
        />

        <HeartCard
          title="Your care"
          image={seventh}
          text="Your care makes my world brighter."
        />
      </div>
    </div>
  );
}

export default Reasons;
