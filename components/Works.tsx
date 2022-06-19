import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <section
      className="grid-container section2Bg py-20 bg-WorkBg mt-24 bg-left bg-no-repeat bg-contain "
      id="Portfolio"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <main className="col-start-2 col-end-3 grid   items-center md:grid-cols-2">
        <div className="">
          <Image
            src="/images/section2Image.png"
            width={550}
            height={615}
            alt="Works Illustration"
          />
        </div>
        <div className="grid justify-center  ">
          <div className="text-center sm:text-left max-w-sm  ">
            <div
              className="md:block hidden "
              data-aos="fade-down"
              data-aos-duration="1500"
            >
            </div>
            <div className="" data-aos="fade-up" data-aos-duration="1000">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl capitalize my-2">
                Hmm? Should I trust this guy?
              </h1>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold ">
                Check Out My Portfolio
              </h1>
              <p className=" text-sm sm:text-base text-gray-700 ">
                I always build realistic websites and real world projects, not
                just simple todo list, calendar, and calculator projects
              </p>
              <Link href="/projects">
                <button className="py-2 sm:py-3 px-6 mt-5 sm:mt-8 rounded-full secondary-btn border-2 text-red-400 border-red-400  ">
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
