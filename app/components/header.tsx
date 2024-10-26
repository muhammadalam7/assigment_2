import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="p-4 bg-black h-14">
        <h1 className="text-teal-500 text-4xl  inline absolute ml-8 top-2">Portfolio</h1>
        <nav className="absolute left-1/3">
          <ul>
            <Link href="/"><li className="inline mr-6 ml-6 absolute left-32"> Home </li></Link>
            <Link href="/"><li className="inline mr-6 ml-6 absolute left-48" > About  </li> </Link>
            <Link href="/"><li className="inline mr-6 ml-6 absolute left-64"> Contact</li> </Link>
          </ul>
          <button className="w-24 h-10 ml-72 bg-teal-700 inline rounded-md absolute left-96 -bottom-8">Register</button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
