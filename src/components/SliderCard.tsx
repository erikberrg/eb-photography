import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

type Props = {
  data: any;
};

function SliderCard({ data }: Props) {
  return (
    <motion.div
      className="relative h-[90px] w-[110px] md:h-[170px] md:min-w-[320px] md:first:h-[205px] md:first:min-w-[384px]"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      <Link href={`/${data?.link}`}>
        <motion.img
          layoutId={data.img}
          alt="Transition Image"
          src={data.img}
          style={{
            borderRadius: '4px',
          }}
          className="absolute object-cover h-full w-full"
        />
        <motion.div className="group absolute z-10 flex flex-row justify-between h-full items-end p-4 w-full">
          <motion.div>
            <motion.div
              layout
              className=" mb-2 h-[2px] w-3 rounded-full bg-white"
            ></motion.div>
            <motion.h1
              layoutId={data.title}
              className="text-md sm:text-xl leading-4 sm:leading-6 text-white font-noto font-medium"
            >
              {data.title}
            </motion.h1>
          </motion.div>
          <motion.div className="bg-white sm:w-7 sm:h-7 h-4 w-4 hidden sm:flex items-center justify-center rounded-full group-hover:scale-110 transition-all duration-500 ease-in-out">
            <Play className="size-2 sm:size-4 fill-zinc-800 stroke-zinc-800 border-none outline-none group-hover:fill-black group-hover:stroke-black transition-colors" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default SliderCard;
