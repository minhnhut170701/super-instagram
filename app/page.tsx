import Image from "next/image";

import TabMenu from "./components/TabMenu";
import ListUserStory from "./components/ListUserStory";
import ListUserCanFollow from "./components/ListUserCanFollow";
import ListPost from "./components/ListPost";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto pt-10">
      <div className="flex">
        <div className="mr-20">
          <ListUserStory />
          <div className="w-[470px] mx-auto mt-14">
            <ListPost />
          </div>
        </div>
        <div className="max-w-[400px]">
          <ListUserCanFollow />
        </div>
      </div>
    </main>
  );
}
