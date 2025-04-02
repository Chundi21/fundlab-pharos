"use client"
import { useState } from "react";

import Link from "next/link"
import React from 'react'
import WalletButton from './WalletButtons'
import Image from 'next/image'
import { usePathname } from "next/navigation";


const NavbarLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Campaigns",
    href: "/campaigns",
  },
  {
    name: "How it works",
    href: "/how-it-works",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const location = usePathname();

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="h-full w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50">
                <div className="flex items-center justify-between h-24 p-4 md:px-16 lg:px-24 mx-auto">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/assets/Logo.png"
                            alt="Fundlab"
                            width={150}
                            height={32}
                        />
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    {NavbarLinks.map((link, index) => (
                      <Link key={index} href={`${link.href}`} className={`text-white hover:text-[#9B89FA] transition-colors ${location === link.href && "text-[#9B89FA]"}`}>
                        {link.name}
                      </Link>
                    ))}
                    </nav>

                    {/* Connect Wallet Button */}
                    <WalletButton />
                </div>
            </div>
        </header>
    )
}
