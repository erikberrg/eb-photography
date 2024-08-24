'use client'
import { motion, AnimatePresence } from "framer-motion"
import React from "react";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export type Data = {
  img: string;
  title: string;
  description: string;
  link: string;
};
export type CurrentSlideData = {
  data: Data;
  index: number;
};
export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });
  return (
    <main
      className={`relative min-h-[calc(100vh-3.5rem)] select-none overflow-hidden text-white antialiased bg-zinc-100`}
    >
      <AnimatePresence>
        <motion.div className="relative h-[calc(100vh-3.5rem)] shadow-2xl overflow-visible z-50">
          <BackgroundImage
            transitionData={transitionData}
            currentSlideData={currentSlideData}
          />
          <div className="absolute z-20 h-[calc(100vh-3.5rem)] w-full top-0">
            <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
              {/* Slider Left Section Content */}
              <div className="col-span-6 mb-3 flex h-[calc(100vh-3.5rem)] flex-1 flex-col justify-center px-5 md:mb-0 md:justify-center md:px-16">
                <SlideInfo
                  transitionData={transitionData}
                  currentSlideData={currentSlideData}
                />
              </div>

              {/* Slider Right Carousel Content */}
              <div className="col-span-4 flex h-[calc(100vh-3.5rem)] flex-1 flex-col p-4 md:justify-end justify-center">
                <Slides data={data} />
                <Controls
                  currentSlideData={currentSlideData}
                  data={data}
                  transitionData={transitionData}
                  initData={initData}
                  handleData={setData}
                  handleTransitionData={setTransitionData}
                  handleCurrentSlideData={setCurrentSlideData}
                  sliderData={sliderData}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/*Services Section */}
      <Services />
      {/*Services Section */}
      {/*Contact */}
      <Contact />
      {/*Contact */}
    </main>
  );
}

const sliderData = [
  {
    img: "/4.avif",
    title: "Nat & Madison",
    description:
      "Engagement photos for Nat and Madison // 8.14.24",
    link: "nadison",
  },
  {
    img: "/3.avif",
    title: "366 Days",
    description:
      "A collection of photos taken in 2024 // 1.1.24",
    link: "year",
  },
  {
    img: "/1.avif",
    title: "UWSP Tennis",
    description:
      "Photos of the UWSP Tennis team // 9.1.22",
    link: "tennis",
  },
  {
    img: "/2.avif",
    title: "UWSP Baseball",
    description:
      "Photos of the UWSP Baseball team // 9.1.23",
    link: "baseball",
  },
];

const initData = sliderData[0];