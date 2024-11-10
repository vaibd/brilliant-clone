import { GetStarted } from "../Shared/Buttons/GetStarted";


const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-28 items-center py-16 width-lg max-sm:text-center">
      <div>
        <h1 className="mb-4">
          Learn by <span className="text-blue-500">doing</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Guided interactive problem solving that's effective and fun. Master
          concepts in 15 minutes a day.
        </p>
        <GetStarted className="w-40 sm:w-72" />
      </div>
      <div className="relative rounded-3xl border-t-2 border-l-2 border-b-8 border-r-8 border-black">
        <img
          src="src/assets/images/hero.png"
          alt="Interactive learning interface"
          className="rounded-3xl "
        />
      </div>
    </div>
  );
};

export default Hero;
