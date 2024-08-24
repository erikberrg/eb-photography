import React from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

function Footer() {
    return (
        <>
            <MaxWidthWrapper className="relative h-20 bg-white text-black flex justify-center items-center">
                <div className="h-full w-full flex flex-col md:flex-row md:justify-between justify-center items-center">
                    <div className="text-center md:text-left pb-2 md:pb-0">
                        <p className="text-xs text-muted-foreground font-light">
                            &copy; {new Date().getFullYear()} Erik Berg Photography.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-8">
                            <p className="text-xs text-muted-foreground font-light">
                                Madison, WI.
                            </p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default Footer