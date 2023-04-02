"use client";
import React from "react";
import avatar2 from "../../asset/avatar_2.jpg";
import Image from "next/image";
const userCanFollow = [
  {
    id: 1,
    userName: "uvyne_",
    avatar: avatar2,
    description: "Có _hienanh + 4 người nữa theo dõi",
  },
  {
    id: 2,
    userName: "uvyne_",
    avatar: avatar2,
    description: "Có _hienanh + 4 người nữa theo dõi",
  },
  {
    id: 3,
    userName: "uvyne_",
    avatar: avatar2,
    description: "Có _hienanh + 4 người nữa theo dõi",
  },
  {
    id: 4,
    userName: "uvyne_",
    avatar: avatar2,
    description: "Có _hienanh + 4 người nữa theo dõi",
  },
  {
    id: 5,
    userName: "uvyne_",
    avatar: avatar2,
    description: "Có _hienanh + 4 người nữa theo dõi",
  },
  {
    id: 6,
    userName: "uvyne_",
    avatar: avatar2,
    description: "Có _hienanh + 4 người nữa theo dõi",
  },
  {
    id: 7,
    userName: "uvyne_",
    avatar: avatar2,
    description: "Có _hienanh + 4 người nữa theo dõi",
  },
];

function ListUserCanFollow() {
  return (
    <div className="mt-4 w-full">
      {/* infor user */}
      <div className="flex items-center justify-between w-full">
        <div className="w-14 h-14 relative mr-3">
          <Image
            src={avatar2}
            alt=""
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-semibold">khanhrin147</h2>
          <p className="text-gray-500 text-sm">Nguyễn Minh Nhựt</p>
        </div>
        <button className="text-blue-400 text-sm font-semibold">Chuyển</button>
      </div>
      {/* list user can follow */}

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h2>Gợi ý cho bạn</h2>
          <button className="text-sm font-semibold">Xem tất cả</button>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {userCanFollow.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full "
            >
              <div className="w-10 h-10 relative mr-3">
                <Image
                  src={item.avatar}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 mr-4">
                <h2 className="font-semibold">{item.userName}</h2>
                <p className="text-gray-500 text-sm  text-ellipsis overflow-hidden line-clamp-1">
                  {item.description}
                </p>
              </div>
              <button className="text-blue-400 text-sm font-semibold">
                Theo dõi
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListUserCanFollow;
