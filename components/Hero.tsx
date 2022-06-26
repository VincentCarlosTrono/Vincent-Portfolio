import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid-container">
      <main className="col-start-2 col-end-3 text-center grid justify-center md:justify-start sm:text-left">
        <div className="max-w-md my-36 text-gray-800  ">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extralight  mb-2">
            Hey, Vincent Here!
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold capitalize">
            a Web Developer
          </h1>
          <p className="text-sm sm:text-base font-body mb-2 text-gray-700 ">
            I'm a software engineer based in Manila, Philippines specializing in
            building exceptional websites, applications, and everything in
            between . <br />
          </p>
          <p className="text-sm sm:text-base  font-body text-gray-700 ">
            Passionate, hardwork, and committed, Building something is me
            expressing myself. Building beautiful projects makes me proud and
            happy.
          </p>
          <div className="md:flex items-center justify-between gap-4">
            <Link href="mailto:trono.vincentcii@gmail.com">
              <a target="_blank" rel="noopener noreferrer">
                <button className="py-2 sm:py-3 px-6 mt-5 sm:mt-9  rounded-full primary-btn  ">
                  Contact Me
                </button>
              </a>
            </Link>
            <div className="flex mt-5 sm:mt-8 gap-4 items-center justify-center">
              <Link href="https://github.com/VincentCarlosTrono">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <button
                    className="grid place-content-center p-3  bg-gray-200 hover:bg-gray-300 rounded-full transform hover:scale-105 "
                    aria-label="Github"
                  >
                    <box-icon
                      type="logo"
                      name="github"
                      color="#282828"
                    ></box-icon>
                  </button>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/vincent-trono-668462191/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <button
                    className="grid place-content-center p-3 bg-gray-200 hover:bg-gray-300 rounded-full transform hover:scale-105 "
                    aria-label="linkedIn"
                  >
                    <box-icon
                      name="linkedin"
                      type="logo"
                      color="#282828"
                    ></box-icon>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
