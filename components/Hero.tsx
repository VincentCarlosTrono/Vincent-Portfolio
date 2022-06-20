import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid-container">
      <main className="col-start-2 col-end-3 text-center sm:text-left">
        <div className="max-w-lg my-36 text-gray-800 ">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extralight  mb-2">
            Hey, Vincent Here!
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold capitalize">
            a Web Developer
          </h1>
          <p className="text-sm sm:text-base font-body mb-2 text-gray-700 max-w-md">
            I'm a software engineer based in Manila, Philippines specializing in
            building exceptional websites, applications, and everything in
            between. <br />
          </p>
          <p className="text-sm sm:text-base  font-body text-gray-700 max-w-md">
            Passionate, hardwork, committed naol web developer makes me happy
            creating wonderful projects.
          </p>
          <div className="md:flex items-center justify-between max-w-sm gap-4">
            <Link href="https://github.com/WilbertTosoy/resume2/raw/main/EdTosoy-Developer-Resume.pdf">
              <a target="_blank" rel="noopener noreferrer">
                <button className="py-2 sm:py-3 px-6 mt-5 sm:mt-9  rounded-full primary-btn  ">
                  Contact Me
                </button>
              </a>
            </Link>
            <div className="flex mt-5 sm:mt-8 gap-4 items-center justify-center">
              <Link href="https://github.com/EdTosoy">
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
              <Link href="https://www.linkedin.com/in/edtosoy/">
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
