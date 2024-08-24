import React from "react";
import { motion } from "framer-motion";
import { Data, CurrentSlideData } from "@/app/page";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
  return (
    <>
      {/* Background Transition Animation  */}
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.4, ease: [0.75, 0, 0.5, 1] },
          }}
          className="absolute z-10 h-[calc(100vh-3.5rem)] w-full object-cover brightness-[75%]"
          src={transitionData.img}
        />
      )}

      {/* Background Image */}
      <motion.img
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        className="relative h-[calc(100vh-3.5rem)] w-full object-cover brightness-[75%]"
      />
    </>
  );
}

export default BackgroundImage;
