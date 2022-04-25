import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Responsive Navbar</title>
        <meta
          name="description"
          content="This is a responsive navbar built with nextJS and TailwindCSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white text-center font-serif font-semibold bg-emerald-500 p-5">
        <h1 className="text-5xl mb-2">
          Responsive Navbar built with nextJS and TailwindCSS
        </h1>
        <p className="text-2xl text-green-900">
          This can be used in any ReactJS or NextJS project styled with Tailwind
          CSS.
        </p>
      </main>
    </div>
  );
}
