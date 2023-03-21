import Head from 'next/head'
import React from "react";
import TweetComposer from "@/components/tweetComposer";
import Navbar from "@/components/navBar";
import Trending from "@/components/trending";
import SearchBar from "@/components/searchBar";
import Feed from "@/components/feed";
import HomeHeader from "@/components/homeHeader";


export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="flex w-full justify-center h-screen fixed top-0 left-0 right-0">
        <div className="font-light w-full max-w-screen-xl grid grid-cols-9 divide-x divide-gray-700">
          {/* Navigation */}
          <div className={"col-span-2 relative overflow-auto"}>
            <Navbar></Navbar>
          </div>

          <div className="col-span-7 grid grid-cols-3 overflow-y-scroll">
            {/* Feed */}
            <div className="col-span-2">
              <div className={"divide-y divide-gray-700"}>
                <div className={"fixed top-0"}>
                  <HomeHeader></HomeHeader>
                </div>
                <TweetComposer></TweetComposer>
                <Feed></Feed>
              </div>
            </div>
            {/* TRENDING */}
            <div className="col-span-1 px-5 space-y-4 relative">
              <SearchBar/>
              <Trending/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
