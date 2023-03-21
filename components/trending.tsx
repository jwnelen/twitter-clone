import React from "react";
import {TreeDots} from "@/components/icons";

interface TrendingItemProps {
  topText: string,
  hashtag: string,
  amount_tweets: number
}

const TrendingItem = ({topText, hashtag, amount_tweets}: TrendingItemProps) => {
  const tweetText = amount_tweets > 1 ? "tweets" : "tweet"
  const displayText = `${amount_tweets} ${tweetText}`

  return (
    <div className={"flex justify-between hover:bg-gray-600 cursor-pointer px-4 py-3"}>
      <div className={"flex flex-col"}>
        <span className={"text-sm text-gray-400"}>{topText}</span>
        <span className={"font-bold"}>{hashtag}</span>
        <span className={"text-sm text-gray-400"}>{displayText}</span>
      </div>
      <div>
        <TreeDots></TreeDots>
      </div>
    </div>
  )
}

const Trending = () => {
  return (
    <div className="bg-darkgray-500 rounded-2xl overflow-hidden">
      <div className={"text-xl font-bold px-4 pt-4"}>Trends voor jou</div>
      {Array.from(Array(5)).map((_, index) => {
        return <TrendingItem key={index}
                             topText={'Trending in Duitsland'}
                             hashtag={"#test"}
                             amount_tweets={index + 1}></TrendingItem>
      })}
      <div className="text-blue-500 cursor-pointer p-3 hover:bg-gray-600">Meer weergeven</div>
    </div>
  )
}

export default Trending;