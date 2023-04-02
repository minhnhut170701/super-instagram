"use client";
import React from "react";
import Image from "next/image";
import {
  HiHome,
  HiSearch,
  HiPaperAirplane,
  HiHeart,
  HiPlusCircle,
  HiPlay,
  HiRss,
} from "react-icons/hi";
import { LogoText } from "../../asset";
import Link from "next/link";

function TabMenu() {
  return (
    <div className="p-4">
      <h1 className="text-red-500">
        {" "}
        <Image src={LogoText} alt="logo" width={100} height={100} />
      </h1>
      <div className="mt-10">
        <ul className="flex flex-col gap-6">
          <li>
            <Link href="" className="flex items-center gap-2 ">
              <HiHome className="text-2xl" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/post" className="flex items-center gap-2">
              <HiSearch className="text-2xl" />
              <span>Tìm Kiếm</span>
            </Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <HiRss className="text-2xl" />
            <span>Khám phá</span>
          </li>
          <li>
            <Link href="/reels" className="flex items-center gap-2">
              <HiPlay className="text-2xl" />
              <span>Reels</span>
            </Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <HiPaperAirplane className="text-2xl " />
            <span>Tin Nhắn</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <HiHeart className="text-2xl" />
            <span>Thông Báo</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <HiPlusCircle className="text-2xl" />
            <span>Tạo</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TabMenu;
