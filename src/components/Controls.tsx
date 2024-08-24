import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "./Progress";
import { CurrentSlideData, Data } from "@/app/page";

type Props = {
  currentSlideData: CurrentSlideData;
  sliderData: Data[];
  data: Data[];
  transitionData: Data;
  handleData: React.Dispatch<React.SetStateAction<Data[]>>;
  handleTransitionData: React.Dispatch<React.SetStateAction<Data>>;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<CurrentSlideData>
  >;
  initData: Data;
};

function Controls({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}: Props) {
  const handlePrev = () => {
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);
    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex(
        (ele) => ele.img === data[data.length - 1].img
      ),
    });
    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev) => prev.slice(1));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.img === data[0].img),
    });
    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  return (
    <>
      <div className="items-center gap-3 px-0 py-3 md:px-1 md:py-5 hidden sm:flex">
        <SliderButton handleClick={handlePrev}>
          <IoIosArrowBack className="sm:text-2xl text-xl sm:group-hover:fill-black transition-all" />
        </SliderButton>
        <SliderButton handleClick={handleNext}>
          <IoIosArrowForward className="sm:text-2xl text-xl sm:group-hover:fill-black transition-all" />
        </SliderButton>
        <Progress curIndex={currentSlideData.index} length={sliderData.length}/>
      </div>
      <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5 sm:hidden">
        <Progress curIndex={currentSlideData.index} length={sliderData.length} />
        <SliderButton handleClick={handlePrev}>
          <IoIosArrowBack className="sm:text-2xl text-xl sm:group-hover:fill-black transition-all" />
        </SliderButton>
        <SliderButton handleClick={handleNext}>
          <IoIosArrowForward className="sm:text-2xl text-xl sm:group-hover:fill-black transition-all" />
        </SliderButton>
      </div>
    </>
  );
}

export default Controls;

const SliderButton = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <button
      className="group flex sm:h-14 sm:w-14 h-10 w-10 items-center justify-center rounded-full bg-zinc-300/30 backdrop-blur-sm transition duration-200
ease-in-out sm:hover:bg-white"
      onClick={handleClick}
      aria-label="Arrow Buttons"
    >
      {children}
    </button>
  );
};
