import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch ";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="DevOverflow Logo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      {/* GlobalSearch */}
      <GlobalSearch />
      <div className="flex-between gap-5">
        {/* Theme */}
        <Theme />
        {/* <SignedOut>
          <SignInButton />
        </SignedOut> */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
