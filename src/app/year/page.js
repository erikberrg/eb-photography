'use client'
import React from "react";
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";

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

const options = {
    bgOpacity: 0.95,
}

export default function page() {
    return (
        <>
            <div>
                <div className='relative h-[75vh] flex justify-center items-center flex-col gap-4'>
                    <div className='absolute bg-[url("/3.avif")] bg-center bg-cover h-full w-full brightness-[75%]' />
                    <span className='relative z-10 font-semibold md:text-9xl sm:text-8xl text-6xl text-white font-noto'>366 Days</span>
                    <Link href="/year.zip" download>
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
                            original="/year/eb-01.jpg"
                            thumbnail="/year/eb-t-01.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-01.jpg" />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-02.jpg"
                            thumbnail="/year/eb-t-02.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-02.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-03.jpg"
                            thumbnail="/year/eb-t-03.jpg"
                            width="2048"
                            height="1365"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-03.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-04.jpg"
                            thumbnail="/year/eb-t-04.jpg"
                            width="2048"
                            height="1365"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-04.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-05.jpg"
                            thumbnail="/year/eb-t-05.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-05.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-06.jpg"
                            thumbnail="/year/eb-t-06.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-06.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-07.jpg"
                            thumbnail="/year/eb-t-07.jpg"
                            width="1638"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-07.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-08.jpg"
                            thumbnail="/year/eb-t-08.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-08.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-09.jpg"
                            thumbnail="/year/eb-t-09.jpg"
                            width="1638"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-09.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-10.jpg"
                            thumbnail="/year/eb-t-10.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-10.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-11.jpg"
                            thumbnail="/year/eb-t-11.jpg"
                            width="2048"
                            height="1365"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-11.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-12.jpg"
                            thumbnail="/year/eb-t-12.jpg"
                            width="2048"
                            height="1365"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-12.jpg" className='md:mt-0 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-13.jpg"
                            thumbnail="/year/eb-t-13.jpg"
                            width="1638"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-13.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-14.jpg"
                            thumbnail="/year/eb-t-14.jpg"
                            width="1638"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-14.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-15.jpg"
                            thumbnail="/year/eb-t-15.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-15.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-16.jpg"
                            thumbnail="/year/eb-t-16.jpg"
                            width="2048"
                            height="1463"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-16.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-17.jpg"
                            thumbnail="/year/eb-t-17.jpg"
                            width="1638"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-17.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-18.jpg"
                            thumbnail="/year/eb-t-18.jpg"
                            width="2048"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-18.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-19.jpg"
                            thumbnail="/year/eb-t-19.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-19.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-20.jpg"
                            thumbnail="/year/eb-t-20.jpg"
                            width="1638"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-20.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-21.jpg"
                            thumbnail="/year/eb-t-21.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-21.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-22.jpg"
                            thumbnail="/year/eb-t-22.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-22.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-23.jpg"
                            thumbnail="/year/eb-t-23.jpg"
                            width="2048"
                            height="1152"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-23.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-24.jpg"
                            thumbnail="/year/eb-t-24.jpg"
                            width="2048"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-24.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-25.jpg"
                            thumbnail="/year/eb-t-25.jpg"
                            width="2048"
                            height="1463"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-25.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-26.jpg"
                            thumbnail="/year/eb-t-26.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-26.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-27.jpg"
                            thumbnail="/year/eb-t-27.jpg"
                            width="2048"
                            height="1152"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-27.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-28.jpg"
                            thumbnail="/year/eb-t-28.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-28.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-29.jpg"
                            thumbnail="/year/eb-t-29.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-29.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-30.jpg"
                            thumbnail="/year/eb-t-30.jpg"
                            width="2048"
                            height="1152"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-30.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-31.jpg"
                            thumbnail="/year/eb-t-31.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-31.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-32.jpg"
                            thumbnail="/year/eb-t-32.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-32.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-33.jpg"
                            thumbnail="/year/eb-t-33.jpg"
                            width="4167"
                            height="3334"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-33.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-34.jpg"
                            thumbnail="/year/eb-t-34.jpg"
                            width="5000"
                            height="4000"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-34.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-35.jpg"
                            thumbnail="/year/eb-t-35.jpg"
                            width="3804"
                            height="3043"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-35.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-36.jpg"
                            thumbnail="/year/eb-t-36.jpg"
                            width="3336"
                            height="2669"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-36.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-37.jpg"
                            thumbnail="/year/eb-t-37.jpg"
                            width="2313"
                            height="2891"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-37.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-38.jpg"
                            thumbnail="/year/eb-t-38.jpg"
                            width="1258"
                            height="1573"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-38.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-39.jpg"
                            thumbnail="/year/eb-t-39.jpg"
                            width="1788"
                            height="2235"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-39.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-40.jpg"
                            thumbnail="/year/eb-t-40.jpg"
                            width="4993"
                            height="3994"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-40.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/year/eb-41.jpg"
                            thumbnail="/year/eb-t-41.jpg"
                            width="3348"
                            height="2676"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/year/eb-t-41.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                    </motion.div>
                </Gallery>
            </div>
        </>
    )
};