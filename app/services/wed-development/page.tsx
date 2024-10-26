import Link from 'next/link'
import React from 'react'

const Development = () => {
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
              <Link href="/" className="text-xl"> Home</Link>
            </li>

            <li className="li">
              <Link href="./" className="text-xl"> Services</Link>
            </li>

            <li className="li">
              <Link href="./" className="text-xl"> About</Link>
            </li>

            <li className="li">
              <Link href="./" className="text-xl"> Contact</Link>
            </li>

           </ul>
        </nav>
      </header>
      <main>
        <section className="absolute left-44 bottom-40 w-9/12 h-44 bg-slate-600">
          <h1 className="pt-16 pl-64 font-extrabold text-6xl">Web Development</h1>
        </section>
      </main>
    
    </div>
  )
}

export default Development
