"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import avatar1 from "../../asset/avatar_1.jpg";
import { HiDotsHorizontal, HiBookmark } from "react-icons/hi";
import { BsChat, BsEmojiSmile, BsHeart } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";

interface PostProps {
  useraAvatar: StaticImageData;
  title: string;
  post: StaticImageData;
  postComment: string;
  postLike: number;
  postTime: string;
}

function Post({
  useraAvatar,
  title,
  post,
  postComment,
  postLike,
  postTime,
}: PostProps) {
  return (
    <section className="pb-2 border-b border-gray-200 mb-10">
      <div className="flex flex-col gap-2">
        {/* title */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <div className="bg-gradient-to-tr from-pink-500 to-yellow-400 p-[2px] rounded-full">
              <Image
                src={useraAvatar}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full border border-white"
              />
            </div>
            <p>{title}</p>
            <p className="w-1 h-1 bg-gray-500 rounded-full"></p>
            <p className="text-sm text-gray-500">{postTime}</p>
          </div>
          <button>
            <span>
              <HiDotsHorizontal />
            </span>
          </button>
        </div>
        {/* images post */}
        <div className="relative w-full h-[500px] mt-2">
          <Image
            src={post}
            alt="avatar"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        {/* tool box */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2">
              <span>
                <BsHeart className="w-5 h-5" />
              </span>
            </button>
            <button className="flex items-center space-x-2">
              <span>
                <BsChat className="w-5 h-5" />
              </span>
            </button>
            <button className="flex items-center space-x-2">
              <span>
                <FaRegPaperPlane className="w-5 h-5" />
              </span>
            </button>
          </div>
          <button>
            <span>
              <HiBookmark className="w-6 h-6" />
            </span>
          </button>
        </div>
        {/* like */}
        <p className="font-semibold text-sm">
          <span className="mr-2">{postLike}</span>
          <span>lượt thích</span>
        </p>
        {/* list comment */}

        <div className="flex items-center space-x-2 mt-2">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-sm mt-1">{postComment}</p>
        </div>

        {/* comment input */}
        <div className="flex items-center mt-2">
          <input
            type="text"
            placeholder="Thêm bình luận..."
            className="flex-1 ml-2 outline-none mr-4"
          />
          <button>
            <span>
              <BsEmojiSmile />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Post;
