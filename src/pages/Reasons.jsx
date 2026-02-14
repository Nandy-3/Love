import HeartCard from "../components/HeartCard";
import fifth from "../assets/fifth.jpeg";
import sixth from "../assets/sixth.jpeg";
import first from "../assets/first.jpeg";
import seventh from "../assets/seventh.jpeg";

function Reasons() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        I Love You 💖
      </h1>

      <div className="grid md:grid-cols-4 gap-8">
        <HeartCard
          title="Your Smile"
          image={sixth}
          text="I always tell you that I love your smile, it stirs something beautiful and magical inside my heart..❤️"
        />

        <HeartCard
          title="Your Support"
          image={fifth}
          text="U always encourage and guide me in everything, ur support means the world to me..❤️"
        />

        <HeartCard
          title="Your love"
          image={first}
          text="Some love may not be shown, but it is the most beautiful and strongest of all,just like yours..❤️"
        />

        <HeartCard
          title="Your care"
          image={seventh}
          text="Your attitude seems like you don’t care about me, but actually you take good care of me..❤️"
        />
      </div>
    </div>
  );
}

export default Reasons;
