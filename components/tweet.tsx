import {Tweet} from '@/types'
import React from "react";
import {VerifiedIcon, ThreeDots, CommentIcon, ShareIcon} from "@/components/icons";

const Tweet = (t:Tweet) => {
  const tweet = t
  return (
    <div className="flex w-full">
      <div className={"m-4"}>
        <div className={"rounded-full bg-gray-400 w-10 h-10"}></div>
      </div>
      <div className="my-3">
        <div className="flex space-x-1 items-center">
          <div className="font-bold">{tweet.user.name}</div>
          {tweet.user.verified && <VerifiedIcon></VerifiedIcon>}
          <div className={"text-gray-500"}>@{tweet.user.username}</div>
          <span className={"text-gray-500"}>·</span>
          <div className={"text-gray-500"}>{tweet.minutesAgo} m</div>
          <div className={"grow"}></div>
          <div className={"pr-4"}><ThreeDots></ThreeDots></div>
        </div>
        <div>
          {tweet.text}
        </div>
        <div className={"flex space-x-14 text-gray-500 my-2"}>
          <div className={"flex space-x-2"}><CommentIcon/> <span>{tweet.replies}</span></div>
          <div className={"flex space-x-2"}><CommentIcon/> <span>{tweet.retweets}</span></div>
          <div className={"flex space-x-2"}><CommentIcon/> <span>{tweet.likes}</span></div>
          <div className={"flex space-x-2"}><CommentIcon/> <span>{tweet.reads}</span></div>
          <div><ShareIcon/></div>
        </div>
      </div>
    </div>
  )
}

export default Tweet;