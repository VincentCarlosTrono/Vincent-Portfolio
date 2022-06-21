import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const footerLink = [
    {
      title: "Useful links",
      sub1: ["Home", "/#"],
      sub2: ["Portfolio", "/#Portfolio"],
      sub3: ["About", "/#About"],
      sub4: ["Blog", "/#"],
      sub5: ["Get In Touch", "/#Get-In-Touch"],
    },
    {
      title: "Need Help?",
      sub1: ["Faqs", "#"],
      sub2: ["Privacy", "#"],
      sub3: ["Policy", "#"],
      sub4: ["Support", "#"],
      sub5: ["Terms", "#"],
    },
    {
      title: "Contact",
      sub1: ["Facebook", "https://www.facebook.com/EdTosoy"],
      sub2: ["LinkedIn", "https://www.linkedin.com/in/edtosoy/"],
      sub3: ["Email", "mailto:ed.tosoy@gmail.com"],
      sub4: ["Twitter", "https://twitter.com/EdTosoy"],
      sub5: ["Github", "https://github.com/EdTosoy"],
    },
  ];
  return (
    <footer className="grid-container bg-FooterBg mt-10 bg-bottom bg-no-repeat pt-80 bg-cover">
      <main className="col-start-2 col-end-3 grid  ">
        <div className="flex md:flex-row flex-col justify h-between md:items-end">
          {footerLink.map(({ title, sub1, sub2, sub3, sub4, sub5 }, index) => (
            <div className="mb-10 mr-10" key={index}>
              <h1 className="mb-5 text-xl font-semibold ">{title}</h1>
              <Link href={sub1[1]}>
                <a
                  target={title === "Contact" ? "_blank" : "undefined"}
                  rel="noopener"
                >
                  <p className="mb-2 hover:text-purple-600">{sub1[0]}</p>
                </a>
              </Link>
              <Link href={sub2[1]}>
                <a
                  target={title === "Contact" ? "_blank" : "undefined"}
                  rel="noopener"
                >
                  <p className="mb-2 hover:text-purple-600">{sub2[0]}</p>
                </a>
              </Link>
              <Link href={sub3[1]}>
                <a
                  target={title === "Contact" ? "_blank" : "undefined"}
                  rel="noopener"
                >
                  <p className="mb-2 hover:text-purple-600">{sub3[0]}</p>
                </a>
              </Link>
              <Link href={sub4[1]}>
                <a
                  target={title === "Contact" ? "_blank" : "undefined"}
                  rel="noopener"
                >
                  <p className="mb-2 hover:text-purple-600">{sub4[0]}</p>
                </a>
              </Link>
              <Link href={sub5[1]}>
                <a
                  target={title === "Contact" ? "_blank" : "undefined"}
                  rel="noopener"
                >
                  <p className="mb-2 hover:text-purple-600">{sub5[0]}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <div className="col-start-2 col-end-3 py-4 text-gray-600 text-sm flex justify-between border-t">
        <p>Copyright © {date.getFullYear()}</p>
        <p>Vincent Trono All right reserved</p>
      </div>
    </footer>
  );
}
