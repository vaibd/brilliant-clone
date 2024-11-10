import Button3D from "./Button3D";

export const GetStarted = ({ className }: { className?: string }) => {
  return (
    <Button3D
      className={`bg-greenBtn text-white md:px-8 md:py-3 rounded-full hover:bg-greenBtn/75 border-b-4 border-green-600 relative
      before:absolute before:w-[100px] before:h-[300%] before:bg-white/20 before:-translate-y-1/4 before:animate-flashLine1
      after:absolute after:w-[100px] after:h-[300%] after:bg-white/20 after:-translate-y-1/4 after:animate-flashLine2 ${className}`}>
      Get started
    </Button3D>
  );
};
