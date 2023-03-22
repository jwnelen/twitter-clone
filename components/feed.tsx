import React from "react";
import Tweet from "@/components/tweet";

const Feed = ({tweets}: { tweets: Tweet[] }) => {
  return (
    <div className={"h-screen divide-y divide-gray-700"}>
      {tweets.map((t) => {
        return <Tweet key={t.id} {...t}></Tweet>
      })}
    </div>
  )
}

export default Feed