import { Dummy } from "../../components/Landing/Dummy";
import Hero from "../../components/Landing/Hero";
import Navbar from "../../components/Landing/Navbar";
import Stats from "../../components/Landing/Stats";
import Subjects from "../../components/Landing/Subjects";


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
