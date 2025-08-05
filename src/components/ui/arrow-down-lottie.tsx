import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import lottieFile from "@/assets/lottie_files/arrow_down.lottie";

const ArrowDownAnimation = () => {
  return <DotLottieReact src={lottieFile} loop autoplay className="size-30 absolute bottom-4" />;
};

export default ArrowDownAnimation;
