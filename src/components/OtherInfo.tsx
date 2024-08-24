import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

type Props = {
  data: any;
};

{/*Framer */}
const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

function OtherInfo({ data }: Props) {
  return (
    <motion.div initial="hidden" animate={"visible"} className=" flex flex-col">
      <AnimatedText
        className="text-white font-lora hidden sm:block"
        data={data?.description}
      />
      <AnimatedText
        className="text-4xl font-bold md:text-7xl md:leading-[100px] py-2 drop-shadow-2xl font-noto"
        data={data?.title}
      />
      <Link
        href={`/${data?.link}`}
        className="w-fit"
        >
        <button
          className="group w-12 h-12 sm:px-4 sm:w-44 rounded-full bg-zinc-300/30 backdrop-blur-sm text-xs sm:text-sm font-semibold transition duration-200 
            ease-in-out sm:hover:bg-white sm:hover:text-black flex flex-row items-center justify-center gap-2"
        >
          <Play className="h-4 w-4 fill-white sm:group-hover:fill-black font-inter" /><span className="hidden sm:block">View Album</span>
        </button>
      </Link>
    </motion.div>
  );
}

export default OtherInfo;

const AnimatedText = ({
  data,
  className,
}: {
  data?: string;
  className?: string;
}) => {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <motion.p className={` ${className}`} variants={item} key={data}>
        {data}
      </motion.p>
    </span>
  );
};
