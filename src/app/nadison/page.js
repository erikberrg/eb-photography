'use client'
import React from "react";
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";

const item = {
    hidden: {
        y: 20,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.5, duration: 0.3 },
    },
};

const leftArrowSVGString = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 100 125" width="100" height="125"><path d="M5,50L50,5l3,3L11,50l42,42l-3,3L5,50z M92,95l3-3L53,50L95,8l-3-3L47,50L92,95z"/></svg>';

const options = {
    download: leftArrowSVGString,
    bgOpacity: 0.95,
}

export default function page() {
    return (
        <>
            <div>
                <div className='relative h-[75vh] flex justify-center items-center flex-col gap-4'>
                    <div className='absolute bg-[url("/4.avif")] bg-center bg-cover h-full w-full brightness-[75%]' />
                    <span className='relative z-10 font-semibold sm:text-8xl text-4xl text-white font-noto'>Nat & Madison</span>
                    <Link href="/nadison.zip" download>
                        <button
                            className="group sm:w-fit sm:px-6 sm:h-12 h-10 w-[160px] rounded-full bg-zinc-300/30 backdrop-blur-sm text-sm font-semibold transition duration-200 
                            ease-in-out sm:hover:bg-white sm:hover:text-black flex flex-row items-center justify-center gap-2 text-white"
                        >
                            <IoMdDownload size={15} className="fill-white sm:group-hover:fill-black font-inter text-white sm:group-hover:text-black" /> Download Album
                        </button>
                    </Link>
                </div>
                <Gallery withDownloadButton options={options}>
                    <motion.div
                        className='md:columns-4 columns-3 md:gap-1.5 gap-0.5 md:p-4 p-1 sm:[&>img]:cursor-pointer sm:hover:[&>img]:brightness-90'
                        initial="hidden"
                        animate={"visible"}
                        variants={item}
                    >
                        <Item
                            original="/nadison/eb-01.jpg"
                            thumbnail="/nadison/eb-t-01.jpg"
                            width="3920"
                            height="4900"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-01.jpg" />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-02.jpg"
                            thumbnail="/nadison/eb-t-02.jpg"
                            width="3872"
                            height="4840"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-02.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-03.jpg"
                            thumbnail="/nadison/eb-t-03.jpg"
                            width="4893"
                            height="3914"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-03.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-04.jpg"
                            thumbnail="/nadison/eb-t-04.jpg"
                            width="6000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-04.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-05.jpg"
                            thumbnail="/nadison/eb-t-05.jpg"
                            width="6000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-05.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-06.jpg"
                            thumbnail="/nadison/eb-t-06.jpg"
                            width="6000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-06.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-07.jpg"
                            thumbnail="/nadison/eb-t-07.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-07.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-08.jpg"
                            thumbnail="/nadison/eb-t-08.jpg"
                            width="4291"
                            height="3433"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-08.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-09.jpg"
                            thumbnail="/nadison/eb-t-09.jpg"
                            width="4291"
                            height="3433"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-09.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-10.jpg"
                            thumbnail="/nadison/eb-t-10.jpg"
                            width="4673"
                            height="3738"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-10.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-11.jpg"
                            thumbnail="/nadison/eb-t-11.jpg"
                            width="4984"
                            height="3987"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-11.jpg" className='md:mt-1.5 mt-0' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-12.jpg"
                            thumbnail="/nadison/eb-t-12.jpg"
                            width="2949"
                            height="3686"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-12.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-13.jpg"
                            thumbnail="/nadison/eb-t-13.jpg"
                            width="2949"
                            height="3686"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-13.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-14.jpg"
                            thumbnail="/nadison/eb-t-14.jpg"
                            width="4580"
                            height="3664"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-14.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-15.jpg"
                            thumbnail="/nadison/eb-t-15.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-15.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-16.jpg"
                            thumbnail="/nadison/eb-t-16.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-16.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-17.jpg"
                            thumbnail="/nadison/eb-t-17.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-17.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-18.jpg"
                            thumbnail="/nadison/eb-t-18.jpg"
                            width="4890"
                            height="3912"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-18.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-19.jpg"
                            thumbnail="/nadison/eb-t-19.jpg"
                            width="4836"
                            height="3869"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-19.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-20.jpg"
                            thumbnail="/nadison/eb-t-20.jpg"
                            width="4000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-20.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-21.jpg"
                            thumbnail="/nadison/eb-t-21.jpg"
                            width="2194"
                            height="1755"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-21.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-22.jpg"
                            thumbnail="/nadison/eb-t-22.jpg"
                            width="4000"
                            height="5000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-22.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-23.jpg"
                            thumbnail="/nadison/eb-t-23.jpg"
                            width="3086"
                            height="1736"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-23.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-24.jpg"
                            thumbnail="/nadison/eb-t-24.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-24.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-25.jpg"
                            thumbnail="/nadison/eb-t-25.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-25.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-26.jpg"
                            thumbnail="/nadison/eb-t-26.jpg"
                            width="4673"
                            height="3738"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-26.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-27.jpg"
                            thumbnail="/nadison/eb-t-27.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-27.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-28.jpg"
                            thumbnail="/nadison/eb-t-28.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-28.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/nadison/eb-29.jpg"
                            thumbnail="/nadison/eb-t-29.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/nadison/eb-t-29.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                    </motion.div>
                </Gallery>
            </div>
        </>
    )
};