import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { MenuContext } from "../ContextApi/openMenu";

export default function Header() {
  const navs = [
    {
      name: "Home",
      pathname: "/#",
    },
    {
      name: "Portfolio",
      pathname: "/#Portfolio",
    },
    {
      name: "About",
      pathname: "/#About",
    },

    {
      name: "Get in Touch",
      pathname: "/#Get-In-Touch",
    },
  ];
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);
  const { pathname } = useRouter();
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  return (
    <header
      className={`${
        scroll
          ? "bg-white text-black py-2 md:py-4  shadow-md"
          : "text-black  md:text-white pt-2 md:pt-8"
      } grid-container sticky top-0  z-50   `}
    >
      {openMenu && (
        <div className="col-start-1  col-end-4">
          <div className="top-16 border-t border-b shadow-md absolute w-full  text-center  p-6 bg-white ">
            {navs.map(({ name, pathname }) => (
              <Link href={pathname} key={name}>
                <nav className="cursor-pointer navigation my-4 hover:text-red-400 ">
                  {name}
                </nav>
              </Link>
            ))}
            <button className="py-2 px-5 border-2 rounded-full secondary-btn ">
              Contact US
            </button>
          </div>
        </div>
      )}
      <main
        className={` ${
          pathname !== "/" && "text-black"
        } col-start-2 col-end-3   flex items-center justify-between `}
      >
        <Link href="/">
          <div className="cursor-pointer  ">
            <Image
              src="/images/logo.png"
              width={154}
              height={61}
              alt="Developer logo"
            />
          </div>
        </Link>
        <div className="hidden md:flex items-center  ">
          {navs.map(({ name, pathname }) => (
            <Link href={pathname} key={name}>
              <nav className="mr-10 cursor-pointer navigation">{name}</nav>
            </Link>
          ))}
          <Link href="mailto:ed.tosoy@gmail.com">
            <button
              className={`py-2 sm:py-3 px-6  border-2 rounded-full secondary-btn ${
                scroll && "primary-btn border-none shadow-none"
              }`}
            >
              Download CV
            </button>
          </Link>
        </div>
        <div
          className="md:hidden sm:mr-4 cursor-pointer"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <box-icon name="menu" size="md"></box-icon>
        </div>
      </main>
    </header>
  );
}
