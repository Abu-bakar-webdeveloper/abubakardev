"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Mongodb, Reactjs, Nodejs, Redux, Express, Nextjs, Nextjs2, CSS3, HTML5, Javascript, Python } from "../../public/images";

const items = [
  {
    imageUrl: Python,
    alt: "python"
  },
  {
    imageUrl: Javascript,
    alt: "js"
  },
  {
    imageUrl: HTML5,
    alt: "html"
  },
  {
    imageUrl: CSS3,
    alt: "css"
  },
  // {
  //   imageUrl: Nextjs,
  //   alt: "nextjs"
  // },
  {
    imageUrl: Nextjs2,
    alt: "nextjs2"
  },
 {
  imageUrl: Mongodb,
  alt: "mongodb"
 },
 {
  imageUrl: Reactjs,
  alt: "react"
 },
 {
  imageUrl: Nodejs,
  alt: "nodejs"
 },
 {
  imageUrl: Redux,
  alt: "redux"
 },
 {
  imageUrl: Express,
  alt: "express"
 }
];

const MySkills = () => {
  return (
    <div className="">
      <h2 className="text-center text-3xl lg:text-5xl font-bold font-sans text-textcolor my-8">
        My Skills
      </h2>
      <div className="h-[15rem] rounded-md flex flex-col antialiased bg-white dark:bg-secondary dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={items}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default MySkills;
