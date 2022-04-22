import React from "react";
import Head from "next/head";


export default function HeadTag() {
  return (
    <Head>
      <title>Responsive Navbar</title>
      <meta
        name="description"
        content="This is a responsive navbar built with nextJS and TailwindCSS."
      />
      <link rel="icon" href="/favicon.ico" />
      {/* Google Icon */}
      <link
        rel="stylesheet"
        href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
    </Head>
  );
}
