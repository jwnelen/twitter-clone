import React from "react";
import Tweet from "@/components/tweet";
import tweetData from "@/data/tweets"

const Feed = () => {
  const [tweets, setTweets] = React.useState<Tweet[]>(tweetData)

  return (
    <div className={"h-screen max-w-full divide-y divide-gray-700"}>
      {tweets.map((t) => {
        return <Tweet key={t.id} {...t}></Tweet>
      })}
    </div>
  )
}

export default Feed