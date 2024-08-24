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
                    <div className='absolute bg-[url("/2.avif")] bg-center bg-cover h-full w-full brightness-[75%]' />
                    <span className='relative z-10 font-semibold md:text-9xl sm:text-8xl text-6xl text-white font-noto'>Baseball</span>
                    <Link href="/baseball.zip" download>
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
                            original="/baseball/eb-01.jpg"
                            thumbnail="/baseball/eb-t-01.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-01.jpg" />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-02.jpg"
                            thumbnail="/baseball/eb-t-02.jpg"
                            width="1638"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-02.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-03.jpg"
                            thumbnail="/baseball/eb-t-03.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-03.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-04.jpg"
                            thumbnail="/baseball/eb-t-04.jpg"
                            width="2048"
                            height="1365"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-04.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-05.jpg"
                            thumbnail="/baseball/eb-t-05.jpg"
                            width="1365"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-05.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-06.jpg"
                            thumbnail="/baseball/eb-t-06.jpg"
                            width="1638"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-06.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-07.jpg"
                            thumbnail="/baseball/eb-t-07.jpg"
                            width="2048"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-07.jpg" className='md:mt-0 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-08.jpg"
                            thumbnail="/baseball/eb-t-08.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-08.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-09.jpg"
                            thumbnail="/baseball/eb-t-09.jpg"
                            width="1638"
                            height="2048"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-09.jpg" className='md:mt-1.5 mt-0' />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-10.jpg"
                            thumbnail="/baseball/eb-t-10.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-10.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-11.jpg"
                            thumbnail="/baseball/eb-t-11.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-11.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-12.jpg"
                            thumbnail="/baseball/eb-t-12.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-12.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                        <Item
                            original="/baseball/eb-13.jpg"
                            thumbnail="/baseball/eb-t-13.jpg"
                            width="2048"
                            height="1638"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src="/baseball/eb-t-13.jpg" className='md:mt-1.5 mt-1' />
                            )}
                        </Item>
                    </motion.div>
                </Gallery>
            </div>
        </>
    )
};