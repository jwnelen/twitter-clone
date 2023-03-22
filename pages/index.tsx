import Head from 'next/head'
import React from "react";
import TweetComposer from "@/components/tweetComposer";
import Navbar from "@/components/navBar";
import Trending from "@/components/trending";
import SearchBar from "@/components/searchBar";
import Feed from "@/components/feed";
import HomeHeader from "@/components/homeHeader";
import WhoToFollow from "@/components/toFollow";
import tweetData from "@/data/tweets";
import {Tweet} from "@/types";


export default function Home() {
  const [tweets, setTweets] = React.useState<Tweet[]>(tweetData)

  const addTweet = (tweet: Tweet) => {
    setTweets([tweet, ...tweets])
  }

  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href="//abs.twimg.com/favicons/twitter.2.ico"/>
      </Head>
      <div className="flex w-full justify-center h-screen fixed top-0 left-0 right-0">
        <div className="font-light w-full max-w-screen-xl grid grid-cols-9 divide-x divide-gray-700">
          {/* Navigation */}
          <div className={"hidden sm:block sm:col-span-1 lg:col-span-1 xl:col-span-2 relative overflow-auto"}>
            <Navbar></Navbar>
          </div>
          <div className="col-span-9 sm:col-span-8 lg:col-span-8 xl:col-span-7 grid grid-cols-5
            max-w-screen-sm md:max-w-full:md lg:max-w-full
            lg:divide-x lg:divide-gray-700 overflow-y-scroll">
            {/* Feed */}
            <div className="col-span-5 lg:col-span-3 max-w-full overflow-x-hidden">
              <div className="divide-y divide-gray-700 relative w-full">
                <HomeHeader></HomeHeader>
                <TweetComposer addTweet={addTweet}></TweetComposer>
                <Feed tweets={tweets}></Feed>
              </div>
            </div>
            {/* TRENDING */}
            <div className="hidden lg:block lg:col-span-2 px-8 space-y-4">
              <SearchBar/>
              <Trending/>
              <WhoToFollow/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
