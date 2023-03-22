import React from "react";
import Tweet from "@/components/tweet";


const Feed = () => {
  return (
    <div className={"h-screen divide-y divide-gray-700"}>
      <Tweet></Tweet>
      <Tweet></Tweet>
    </div>
  )
}

export default Feed