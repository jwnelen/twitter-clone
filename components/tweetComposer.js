import React from "react";
import ImageIcon from "@/components/icons/image";
import Button from "@/components/UI/Button";

const TweetComposer = () => {
  return (
    <div>
      <div className={"flex w-full"}>
        <div className={"rounded-full bg-gray-400 w-12 h-12 m-4 mt-2"}></div>
        <div className={"grow"}>
          <div className="w-full mb-5">
            <input className={"w-full bg-black py-4"} placeholder={"Wat houdt je bezig?"}></input>
          </div>
          <div className={"flex gap-4"}>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <div className={"grow"}></div>
            <Button className={"mr-4"}>Tweeten</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TweetComposer;