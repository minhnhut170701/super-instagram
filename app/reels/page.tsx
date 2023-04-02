"use client";
import { useState, useRef } from "react";
import { HiDotsHorizontal, HiBookmark } from "react-icons/hi";
import { BsChat, BsEmojiSmile, BsHeart } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import avatar from "../asset/avatar_1.jpg";
import Image from "next/image";

function ReelsPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const toggleVideo = () => {
    const video: any = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleVolume = () => {
    const video: any = videoRef.current;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  return (
    <main className="max-w-[353px] mx-auto mt-10">
      <section>
        <div className="flex space-x-4">
          <div className="flex justify-center relative">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              loop
              onClick={toggleVideo}
              className="rounded-lg "
              src="https://instagram.fsgn5-10.fna.fbcdn.net/o1/v/t16/f1/m78/E441B1537217AD4EDEF3D413822E038B_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNDgwLnN0b3J5LmJhc2VsaW5lIn0&_nc_ht=instagram.fsgn5-10.fna.fbcdn.net&_nc_cat=107&vs=1451791635590690_376627629&_nc_vs=HBksFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0U0NDFCMTUzNzIxN0FENEVERUYzRDQxMzgyMkUwMzhCX3ZpZGVvX2Rhc2hpbml0Lm1wNBUAAsgBABUAGCRHSm1vWkFMUFRMZHBjcW9DQU1MV3BIckFFWFpMYnBSMUFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACbOypOf%2Bu%2BYQBUCKAJDMywXQCjdsi0OVgQYEmRhc2hfYmFzZWxpbmVfMl92MREAdegHAA%3D%3D&_nc_rid=6138d8ade7&ccb=9-4&oh=00_AfBF-EwtBXAWrJWs5KVuM4n8hjHaCkxSJY1rdUvCi4EhXg&oe=642AADE8&_nc_sid=276363"
            ></video>
            <div className="w-full h-full">
              <button className="absolute top-0 right-0" onClick={toggleVolume}>
                Toggle Volume
              </button>
            </div>
          </div>
          {/* tool button */}
          <div className="flex flex-col justify-end gap-4">
            <button>
              <span>
                <BsHeart className="w-6 h-6" />
              </span>
            </button>
            <button>
              <span>
                <BsChat className="w-6 h-6" />
              </span>
            </button>
            <button>
              <span>
                <FaRegPaperPlane className="w-6 h-6" />
              </span>
            </button>
            <button>
              <span>
                <HiBookmark className="w-6 h-6" />
              </span>
            </button>
            <button>
              <span>
                <HiDotsHorizontal className="w-6 h-6" />
              </span>
            </button>
            <button>
              <Image
                src={avatar}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ReelsPage;
