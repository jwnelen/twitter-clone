import Head from 'next/head'
import React from "react";
import TwitterLogo from "@/components/icons/twitterLogo";
import HomeIcon from "@/components/icons/home";
import TreeDots from "@/components/icons/treeDots";
import TweetComposer from "@/components/tweetComposer";
import Button from "@/components/UI/Button";

const NavBarItem = ({text, isActive}: { text: string, isActive: boolean }) => {
  return (
    <div className={`text-xl flex ${isActive && "font-extrabold"}`}>
      <div className={'p-2'}>
        <HomeIcon></HomeIcon>
      </div>
      <span className={'p-2'}>{text}
              </span>
    </div>
  )
}

const TrendingItem = ({
                        topText,
                        hashtag,
                        amount_tweets
                      }: { topText: string, hashtag: string, amount_tweets: number }) => {
  const tweetText = amount_tweets > 1 ? "tweets" : "tweet"
  const displayText = `${amount_tweets} ${tweetText}`

  return (
    <div className={"flex justify-between"}>
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="flex w-full justify-center p-2 h-screen">
        <div className="font-light w-full max-w-screen-xl grid grid-cols-5 divide-x divide-gray-700">
          {/* -- NavBar */}
          <div className="col-span-1 pl-4 space-y-2 mt-2 overflow-y-scroll flex flex-col">
            <div className={"pl-2 mb-4"}>
              <TwitterLogo></TwitterLogo>
            </div>
            <NavBarItem isActive={true} text="Startpagina"></NavBarItem>
            <NavBarItem isActive={false} text="Verkennen"></NavBarItem>
            <NavBarItem isActive={false} text="Meldingen"></NavBarItem>
            <NavBarItem isActive={false} text="Berichten"></NavBarItem>
            <NavBarItem isActive={false} text="Bladwijzers"></NavBarItem>
            <NavBarItem isActive={false} text="Twitter Blue"></NavBarItem>
            <NavBarItem isActive={false} text="Profiel"></NavBarItem>
            <NavBarItem isActive={false} text="Meer"></NavBarItem>
            <div className={"mr-10"}>
              <Button className={"px-5 py-3 w-full"}>Tweeten</Button>
            </div>
            {/* a div to have the empty space*/}
            <div className={"min-h-min grow"}></div>
            <div className={"flex space-x-2 items-center mr-4"}>
              <div className={"rounded-full bg-gray-400 w-10 h-10"}></div>
              <div className={"flex grow flex-col"}>
                <span className={"font-bold"}>
                  Jeroen
                </span>
                <span className={"text-gray-400"}>
                  @Jeroen2232
                </span>
              </div>
              <div className={""}>
                <TreeDots></TreeDots>
              </div>
            </div>
          </div>
          {/* -- Tweets */}
          <div className="col-span-3">
            <div className={"divide-y divide-gray-700"}>
              <div>
                <div className={"text-2xl font-extrabold px-4 py-1 mt-2 mb-6"}>
                  Startpagina
                </div>
                <div className={"flex w-full justify-around items-center"}>
                  <div>
                    <div className="font-bold">
                      Voor jou
                    </div>
                    <div className="bg-blue-500 h-1 mt-2 rounded-xl"></div>
                  </div>
                  <div>
                    Volgend
                  </div>
                </div>
              </div>
              <div>
                <TweetComposer></TweetComposer>
              </div>
              <div>
                List of tweets
              </div>
            </div>
          </div>
          {/* -- Trends voor Jou */}
          <div className="col-span-1 px-5 space-y-4">
            <div>
              <input placeholder="Zoeken op Twitter" className="w-full rounded-xl py-2 px-4"/>
            </div>
            <div className="min-h-screen bg-gray-700 p-3 rounded-2xl space-y-4">
              <span className={"text-xl font-bold"}>Trends voor jou</span>
              {Array.from(Array(10)).map((_, index) => {
                return <TrendingItem key={index}
                                     topText={'Trending in Duitsland'}
                                     hashtag={"#test"}
                                     amount_tweets={index + 1}></TrendingItem>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
