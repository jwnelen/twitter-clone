import {Tweet} from '@/types'
import React from "react";
import {VerifiedIcon, ThreeDots, CommentIcon, ShareIcon, RetweetIcon, HeartIcon, GraphIcon} from "@/components/icons";

const Tweet = (tweet: Tweet) => {
  return (
    <div className="flex">
      <div className={"m-4"}>
        <div className={"rounded-full bg-gray-400 w-10 h-10"}></div>
      </div>
      <div className="my-3 flex-grow">
        <div className="flex flex-wrap space-x-1 items-center ">
          <div className="font-bold">{tweet.user.name}</div>
          {tweet.user.verified && <VerifiedIcon></VerifiedIcon>}
          <div className={"text-gray-500"}>@{tweet.user.username}</div>
          <span className={"text-gray-500"}>·</span>
          <div className={"text-gray-500"}>{tweet.minutesAgo} m</div>
          <div className={"grow"}></div>
          <div className={"pr-4"}><ThreeDots></ThreeDots></div>
        </div>
        <div className={""}>
          {tweet.text}
        </div>
        <div className={"flex flex-wrap space-x-3 sm:space-x-10 text-gray-500 my-2"}>
          <div className={"flex space-x-2 group hover:text-blue-500 hover:cursor-pointer"}><CommentIcon classNames={"group-hover:fill-blue-500"}/> <span>{tweet.replies}</span></div>
          <div className={"flex space-x-2 group hover:text-green-600 hover:cursor-pointer"}><RetweetIcon classNames={"group-hover:fill-green-600"}/> <span>{tweet.retweets}</span></div>
          <div className={"flex space-x-2 group hover:text-red-500 hover:cursor-pointer"}><HeartIcon classNames={"group-hover:fill-red-500"}/> <span>{tweet.likes}</span></div>
          <div className={"flex space-x-2 group hover:text-blue-500 hover:cursor-pointer"}><GraphIcon classNames={"group-hover:fill-blue-500"}/> <span>{tweet.reads}</span></div>
          <div className={"hover:cursor-pointer"}><ShareIcon classNames={"hover:fill-blue-500"}/></div>
        </div>
      </div>
    </div>
  )
}

export default Tweet;