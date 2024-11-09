import { Dummy } from "../../components/Shared/Landing/Dummy";
import Hero from "../../components/Shared/Landing/Hero";
import Navbar from "../../components/Shared/Landing/Navbar";
import Stats from "../../components/Shared/Landing/Stats";
import Subjects from "../../components/Shared/Landing/Subjects";

const Landing = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <Subjects />
      <Stats />
      <Dummy />
    </>
  );
};

export default Landing;
