import { Divider } from "./Divider";

const Stats = () => {
  return (
    <div className="py-20 bg-offWhite flex flex-col md:flex-row items-center justify-between">
      <div className="width-lg mx-auto w-full">
        <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Join over 10 million people learning on Brilliant
        </h3>

        <div className="flex flex-col md:flex-row items-stretch justify-between space-y-4 md:space-y-0 md:space-x-4 w-full max-laptop:space-x-0">
          
          <div className="grid grid-cols-2 gap-4 max-laptop:grid-cols-1 flex-1 justify-center">
            <div className="flex items-center justify-center">
              <img
                src="src/assets/images/new-york-times.png"
                alt="New York Times"
                className="h-7 grayscale opacity-50"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="src/assets/images/atlantic.png"
                alt="The Atlantic"
                className="h-8 grayscale opacity-50"
              />
            </div>
          </div>

          <Divider />

          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="src/assets/icons/Star.svg"
                  alt="Star"
                  className="w-5 h-5"
                />
              ))}
            </div>
            <span className="text-gray-600">Over 50,000 5-star reviews</span>
          </div>

          <Divider />

          <div className="flex-1 flex items-center justify-center">
            <img
              src="src/assets/images/Trustpilot.svg"
              alt="Trustpilot"
              className="size-28"
            />
          </div>

          <Divider />

          <div className="grid grid-cols-2 gap-4 max-laptop:grid-cols-1 flex-1 justify-center">
            <div className="flex items-center justify-center">
              <img
                src="src/assets/images/app-of-the-day.png"
                alt="Apple App of the Day"
                className="h-12"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="src/assets/images/Gplay-best-app.png"
                alt="Google Play Best App"
                className="h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
