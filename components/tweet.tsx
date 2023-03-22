import {Tweet} from '@/types'
import React from "react";
import {VerifiedIcon} from "@/components/icons";

const t: Tweet = {
  id: "123",
  text: 'Hello World',
  user: {
    name: "Jeroen Nelen",
    username: "jeroentjuuhh",
    verified: false
  },
  replies: 2,
  minutesAgo: 5,
  retweets: 3,
  likes: 400,
  reads: 255,
}

const Tweet = () => {
  const tweet = t
  return (
    <div className="flex ">
      <div className={"shrink"}>
        <div className={"rounded-full bg-gray-400 w-10 h-10"}></div>
      </div>
      <div className="grow">
        <div className="flex">
          <div className="font-bold">{tweet.user.name}</div>
          {tweet.user.verified && <VerifiedIcon></VerifiedIcon>}
          <div className={""}>{tweet.user.username}</div>
          <span>.</span>
          <div>{tweet.minutesAgo} m</div>
        </div>
        {tweet.text}
      </div>
    </div>
  )
}

export default Tweet;