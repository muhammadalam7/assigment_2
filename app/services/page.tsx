import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <div>
      <header className="head1">
        <nav>
          <h1 className="img text-black text-4xl font-bold">
            <span className="text-sky-700 font-bold">P</span>ixel
            <span className="text-sky-700 font-bold">P</span>age
          </h1>
          <ul className="ul">
            <li className="li">
              <Link href="/" className="text-xl">
                {" "}
                Home
              </Link>
            </li>

            <li className="li">
              <Link href="./services" className="text-xl">
                {" "}
                Services
              </Link>
            </li>

            <li className="li">
              <Link href="./about" className="text-xl">
                {" "}
                About
              </Link>
            </li>

            <li className="li">
              <Link href="#" className="text-xl">
                {" "}
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <Link href="./services/web-design">
            <div className=" box inline-block w-48 h-36 bg-sky-900">
              <h1 className="pt-16 pl-12">Web Design</h1>
            </div>
          </Link>

          <Link href="./services/wed-development">
            <div className="box2 inline-block w-48 h-36 bg-sky-900">
              <h1 className="pt-16 pl-9">Web Development</h1>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Service;
