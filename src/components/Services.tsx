import React from "react";
import { motion, easeInOut } from "framer-motion";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import MaxWidthWrapper from "./MaxWidthWrapper";
import { IoIosArrowForward, IoMdBriefcase, IoMdMicrophone, IoMdPerson } from "react-icons/io";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

function Services() {
    return (
        <>
            <motion.div
                className="relative w-full bg-zinc-100 text-black flex flex-col justify-start items-start sm:pt-32 pt-16"
            >
                <MaxWidthWrapper>
                    <div className="sm:pb-24 pb-12 flex flex-row sm:justify-start justify-center items-center">
                        <span className="sm:text-6xl text-4xl font-normal font-noto">My services include</span>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        className="md:h-[350px] flex md:flex-row flex-col md:space-y-0 space-y-4 w-full justify-center items-center md:space-x-8 space-x-0"
                    >
                        <Card className="w-2/3 md:w-80 h-full flex flex-col justify-between">
                            <div>
                                <CardHeader>
                                    <CardTitle className="flex flex-col items-center sm:flex-row justify-between md:text-3xl text-xl font-medium font-inter">
                                        Portrait
                                    </CardTitle>
                                    <CardDescription className="w-fit flex items-center justify-center sm:justify-start bg-zinc-200 rounded-full px-2 py-1 text-black">
                                        $40+
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="md:text-lg text-sm font-light text-zinc-900">
                                    <span className="text-sm">Portrait photography is one of my specialties.  I offer services such as mini photoshoots, couple photoshoots, senior photos, and more.</span>
                                </CardContent>
                            </div>
                            <CardFooter>
                                <Dialog>
                                    <DialogTrigger className="text-blue-500 flex-row flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline p-2 w-full sm:justify-start justify-center">Learn More<IoIosArrowForward size="16px" /></DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Portrait</DialogTitle>
                                            <DialogDescription>
                                                Starting at $40
                                            </DialogDescription>
                                        </DialogHeader>
                                        <img
                                            src="/portrait.avif"
                                            className="rounded-sm"
                                        />
                                        <ul className="font-light bg-white rounded-sm px-4 flex flex-col items-between space-y-2 pt-4">
                                            <span className="font-semibold">
                                                Common Portrait Services
                                            </span>
                                            <div>
                                                <div className="border-b border-zinc-200 flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Personal Photoshoot</li>
                                                    <span>Starting at $80</span>
                                                </div>
                                                <div className="border-b border-zinc-200 flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Duo Photoshoot</li>
                                                    <span>Starting at $120</span>
                                                </div>
                                                <div className="border-b border-zinc-200 flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Mini Photoshoot</li>
                                                    <span>Starting at $40</span>
                                                </div>
                                                <div className="border-b border-zinc-200 flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Engagement Photos</li>
                                                    <span>Starting at $150</span>
                                                </div>
                                                <div className="flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Custom</li>
                                                    <span>Send me a messege</span>
                                                </div>
                                            </div>
                                        </ul>
                                    </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                        <Card className="w-2/3 md:w-80 h-full flex flex-col justify-between">
                            <div>
                                <CardHeader>
                                    <CardTitle className="flex flex-col items-center sm:flex-row justify-between md:text-3xl text-xl font-medium font-inter">
                                        Event
                                    </CardTitle>
                                    <CardDescription className="w-fit flex items-center justify-center sm:justify-start bg-zinc-200 rounded-full px-2 py-1 text-black">
                                        $120+
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="md:text-lg text-sm font-light text-zinc-900">
                                    <span className="text-sm">With my eye for detail, I am great at capturing moments during live events such as weddings, concerts, sporting events, and more.</span>
                                </CardContent>
                            </div>
                            <CardFooter>
                                <Dialog>
                                    <DialogTrigger className="text-blue-500 flex-row flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline p-2 w-full sm:justify-start justify-center">Learn More<IoIosArrowForward size="16px" /></DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Event</DialogTitle>
                                            <DialogDescription>
                                                Starting at $120
                                            </DialogDescription>
                                        </DialogHeader>
                                        <img
                                            src="/event.avif"
                                            className="rounded-sm"
                                        />
                                        <ul className="font-light bg-white rounded-sm px-4 flex flex-col items-between space-y-2 pt-4">
                                            <span className="font-semibold">
                                                Common Event Services
                                            </span>
                                            <div>
                                                <div className="border-b border-zinc-200 flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Wedding</li>
                                                    <span>Starting at $500</span>
                                                </div>
                                                <div className="border-b border-zinc-200 flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Concert</li>
                                                    <span>Starting at $200</span>
                                                </div>
                                                <div className="border-b border-zinc-200 flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Sporting Event</li>
                                                    <span>Starting at $120</span>
                                                </div>
                                                <div className="flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Custom</li>
                                                    <span>Send me a messege</span>
                                                </div>
                                            </div>
                                        </ul>
                                    </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                        <Card className="w-2/3 md:w-80 h-full flex flex-col justify-between">
                            <div>
                                <CardHeader>
                                    <CardTitle className="flex flex-col items-center sm:flex-row justify-between md:text-3xl text-xl font-medium font-inter">
                                        Marketing
                                    </CardTitle>
                                    <CardDescription className="w-fit flex items-center justify-center sm:justify-start bg-zinc-200 rounded-full px-2 py-1 text-black">
                                        $25+
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="md:text-lg text-sm font-light text-zinc-900">
                                    <span className="text-sm">Using state-of-the-art equipment, I am fully capible of producing top tier marketing photos or video   for your product.</span>
                                </CardContent>
                            </div>
                            <CardFooter>
                                <Dialog>
                                    <DialogTrigger className="text-blue-500 flex-row flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline p-2 w-full sm:justify-start justify-center">Learn More<IoIosArrowForward size="16px" /></DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Marketing</DialogTitle>
                                            <DialogDescription>
                                                Starting at $25
                                            </DialogDescription>
                                        </DialogHeader>
                                        <img
                                            src="/portrait.avif"
                                            className="rounded-sm"
                                        />
                                        <ul className="font-light bg-white rounded-sm px-4 flex flex-col items-between space-y-2 pt-4">
                                            <span className="font-semibold">
                                                Common Marketing Services
                                            </span>
                                            <div>
                                                <div className="border-b border-zinc-200 flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Product Photoshoot</li>
                                                    <span>Starting at $40</span>
                                                </div>
                                                <div className="border-b border-zinc-200 flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Product Video Shoot</li>
                                                    <span>Starting at $150</span>
                                                </div>
                                                <div className="border-b border-zinc-200 flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Product Graphic</li>
                                                    <span>Starting at $25</span>
                                                </div>
                                                <div className="flex flex-row justify-between items-center py-2 [&>li]:text-sm [&>span]:text-xs">
                                                    <li>Custom</li>
                                                    <span>Send me a messege</span>
                                                </div>
                                            </div>
                                        </ul>
                                    </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </MaxWidthWrapper>
            </motion.div>
        </>
    )
}

export default Services