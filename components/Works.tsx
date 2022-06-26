import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <section
      className="grid-container  pb-16 pt-52 relative lg:bg-WorkBg bg-left-top  section2Bg bg-no-repeat "
      id="Portfolio"
    >
      <main className="col-start-2 col-end-3 grid   items-center md:grid-cols-2">
        <div className="">
          <Image
            src="/images/section3Image.png"
            width={600}
            height={508}
            alt="Works Illustration"
          />
        </div>
        <div className="grid justify-center  ">
          <div className="text-center sm:text-left max-w-sm  ">
            <div
              className="md:block hidden "
              data-aos="fade-down"
              data-aos-duration="1500"
            ></div>
            <div className="" data-aos="fade-up" data-aos-duration="1000">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl capitalize my-2">
                Million of jobs, finds the one that is rights for you
              </h1>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold ">
                Check Out My Portfolio
              </h1>
              <p className=" text-sm sm:text-base text-gray-700 ">
                I always build realistic websites and real world projects, not
                just simple todo list, calendar, and calculator projects
              </p>
              <Link href="/projects">
                <button className="py-2 sm:py-3 px-6 mt-5 sm:mt-8 rounded-full primary-btn  text-red-400   ">
                  Show me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
