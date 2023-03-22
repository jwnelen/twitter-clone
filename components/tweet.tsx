import {Tweet} from '@/types'
import React from "react";
import {VerifiedIcon, ThreeDots, CommentIcon, ShareIcon} from "@/components/icons";

const t: Tweet = {
  id: "123",
  text: 'In de drang om de digitalisering bij te houden, stuiten veel bedrijven op uitdagingen. Expertise van buitenaf om strategisch mee te denken is een oplossing, zegt Diederik Vismans van Boston Consulting Group. \'Gebrek aan kennis leidt tot vertraging.\' #adv',
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
    <div className="flex w-full">
      <div className={"m-4"}>
        <div className={"rounded-full bg-gray-400 w-10 h-10"}></div>
      </div>
      <div className="my-3">
        <div className="flex space-x-1">
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
        <div className={"flex space-x-10 text-gray-500 my-2"}>
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