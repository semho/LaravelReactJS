import React from "react";
import { Navbar } from "../Navbar";

export function Content() {
  return (
    <>
      <header className="text-2xl font-bold underline">
        <Navbar />
      </header>
      <main className="md:container md:mx-auto pt-10">MAIN</main>
    </>
  );
}
