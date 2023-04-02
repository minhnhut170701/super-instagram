"use client";
import React from "react";
import imgne from "../../asset/avatar_1.jpg";
import avatar2 from "../../asset/avatar_2.jpg";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./styles.css";

const data = [
  { id: 1, imgSrc: imgne, title: "_nguyenphuongnhi" },
  { id: 2, imgSrc: avatar2, title: "_nguyenphuongnhi" },
  { id: 3, imgSrc: imgne, title: "_nguyenphuongnhi" },
  { id: 4, imgSrc: imgne, title: "_nguyenphuongnhi" },
  { id: 5, imgSrc: imgne, title: "_nguyenphuongnhi" },
  { id: 6, imgSrc: imgne, title: "_nguyenphuongnhi" },
  { id: 7, imgSrc: imgne, title: "_nguyenphuongnhi" },
  { id: 8, imgSrc: imgne, title: "_nguyenphuongnhi" },
  { id: 9, imgSrc: imgne, title: "_nguyenphuongnhi" },
  { id: 10, imgSrc: imgne, title: "_nguyenphuongnhi" },
  { id: 11, imgSrc: imgne, title: "_nguyenphuongnhi" },
];

function ListUserStory() {
  return (
    <div className="container">
      <Splide
        aria-label="My Favorite Images"
        className="w-[100%] overflow-hidden"
        options={{
          gap: "0px",
          arrows: true,
          pagination: false,
          perPage: 8,
          perMove: 4,
        }}
      >
        {data.map((item) => (
          <SplideSlide key={item.id} className="flex flex-col items-center ">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 p-[2px]">
              <Image
                src={item.imgSrc}
                alt=""
                className="w-full h-full rounded-full border-2 border-white"
              />
            </div>
            <span className="text-xs mt-1 max-w-[70px] text-ellipsis overflow-hidden text-center">
              {item.title}
            </span>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default ListUserStory;
