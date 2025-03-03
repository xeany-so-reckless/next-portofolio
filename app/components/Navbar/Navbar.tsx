'use client'
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm dark:backdrop-blur-md shadow-md">
            <nav aria-label="Main Navigation">
                <div className="max-w-screen-xl px-6 py-4 mx-auto">
                    <div className="flex items-center justify-between">
                        <ul className="flex flex-row font-medium space-x-8 text-lg">
                            <li>
                                <Link href="/" className="text-white hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white hover:underline">
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link href="/project" className="text-white hover:underline">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/skill" className="text-white hover:underline">
                                    Skill
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
