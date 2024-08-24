import React from "react";
import { motion } from "framer-motion";

type Props = {
  curIndex: number;
  length: number;
};

function Progress({ curIndex, length }: Props) {
  return (
    <>
      <div className=" flex sm:h-[3px] h-[1px] flex-1 items-center bg-zinc-400">
        <div
          style={{
            width: (((curIndex + 1) / length) * 100).toString() + "%",
          }}
          className={`sm:h-[3px] h-[1px] bg-white transition-all`}
        ></div>
      </div>
      <span
        key={curIndex}
        style={{
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          key={curIndex}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="items-center justify-center sm:text-4xl text-2xl font-medium font-lora w-14 hidden sm:flex"
        >
          0{curIndex + 1}
        </motion.div>
      </span>
    </>
  );
}

export default Progress;
