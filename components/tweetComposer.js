import React from "react";
import ImageIcon from "@/components/icons/image";


const TweetComposer = () => {
  return (
    <div>
      <div className={"flex w-full"}>
        <div className={"rounded-full bg-gray-400 w-12 h-12 m-4 mt-2"}></div>
        <div className={"grow bg-red-100"}>
          <div>
            <input></input>
          </div>
          <div className={"flex"}>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <div className={"grow"}></div>
            <button className={"bg-blue-600"}>Tweeten</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TweetComposer;