import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { Data, CurrentSlideData } from "@/app/page";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white border" />
        <OtherInfo
          data={transitionData ? transitionData : currentSlideData.data}
        />
    </>
  );
}

export default SlideInfo;
