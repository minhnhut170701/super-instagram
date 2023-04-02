"use client";
import React from "react";
import Post from "../Post";
import imgne from "../../asset/avatar_1.jpg";
import rose from "../../asset/post.jpg";
const mockDataPost = [
  {
    id: 1,
    imgSrc: imgne,
    title: "_nguyenphuongnhi",
    postImg: rose,
    postComment: "Hello world",
    postLike: 100,
    postTime: "3 giờ",
  },
  {
    id: 2,
    imgSrc: imgne,
    title: "_nguyenphuongnhi",
    postImg: rose,
    postComment: "Hello world",
    postLike: 100,
    postTime: "3 giờ",
  },
  {
    id: 3,
    imgSrc: imgne,
    title: "_nguyenphuongnhi",
    postImg: rose,
    postComment: "Hello world",
    postLike: 100,
    postTime: "3 giờ",
  },
  {
    id: 4,
    imgSrc: imgne,
    title: "_nguyenphuongnhi",
    postImg: rose,
    postComment: "Hello world",
    postLike: 100,
    postTime: "3 giờ",
  },
  {
    id: 5,
    imgSrc: imgne,
    title: "_nguyenphuongnhi",
    postImg: rose,
    postComment: "Hello world",
    postLike: 100,
    postTime: "3 giờ",
  },
  {
    id: 6,
    imgSrc: imgne,
    title: "_nguyenphuongnhi",
    postImg: rose,
    postComment: "Hello world",
    postLike: 100,
    postTime: "3 giờ",
  },
  {
    id: 7,
    imgSrc: imgne,
    title: "_nguyenphuongnhi",
    postImg: rose,
    postComment: "Hello world",
    postLike: 100,
    postTime: "3 giờ",
  },
  {
    id: 8,
    imgSrc: imgne,
    title: "_nguyenphuongnhi",
    postImg: rose,
    postComment: "Hello world",
    postLike: 100,
    postTime: "3 giờ",
  },
];

function ListPost() {
  return (
    <div>
      {mockDataPost.map((item): any => (
        <Post
          key={item.id}
          useraAvatar={item.imgSrc}
          title={item.title}
          post={item.postImg}
          postComment={item.postComment}
          postLike={item.postLike}
          postTime={item.postTime}
        />
      ))}
    </div>
  );
}

export default ListPost;
