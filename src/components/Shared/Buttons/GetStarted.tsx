import { ButtonRound } from "./ButtonRound";

export const GetStarted = () => {
  return (
    <ButtonRound
      className="xl:w-72 h-[52px] bg-greenBtn text-white md:px-8 md:py-3 rounded-full hover:bg-greenBtn/75 border-b-4 border-green-600 
      active:border-b-0 active:translate-y-[1px] relative overflow-hidden
      before:absolute before:w-[100px] before:h-[300%] before:bg-white/20 before:-translate-y-1/4 before:animate-flashLine1
      after:absolute after:w-[100px] after:h-[300%] after:bg-white/20 after:-translate-y-1/4 after:animate-flashLine2">
      Get started
    </ButtonRound>
  );
};
