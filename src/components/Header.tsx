import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Header = () => {
    return (
        <>
            <nav className="sticky z-[60] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
                <MaxWidthWrapper>
                    <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                        <Link href="/" className="flex z-40 font-medium text-xs font-noto tracking-[4px] text-zinc-700">
                            EB - PHOTOGRAPHY
                        </Link>
                        {/*
                        <div className="h-full flex items-center space-x-12 font-normal text-sm font-noto text-zinc-700">
                            <Link href="/about">About</Link>
                            <Link href="/albums">Albums</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                        */}
                    </div>
                </MaxWidthWrapper>
            </nav>
        </>
    )
}
export default Header