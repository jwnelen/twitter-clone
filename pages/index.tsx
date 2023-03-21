import Head from 'next/head'
import React from "react";
import TwitterLogo from "@/components/icons/twitterLogo";
import HomeIcon from "@/components/icons/home";
import TreeDots from "@/components/icons/treeDots";


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
        <div className="font-light w-full max-w-screen-xl grid grid-cols-5">
          <div className="col-span-1 pl-4 space-y-2 mt-2 overflow-y-scroll">
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
              <button className={"btn py-3 px-4 w-full rounded-2xl bg-blue-400"}>
                Tweeten
              </button>
            </div>
            <div className={"flex space-x-2 items-center mr-4"}>
              <div className={"rounded-full bg-gray-400 w-10 h-10"}>
              </div>
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

          <div className="col-span-3 bg-red-400">
            <div>
              <div className={"text-2xl font-extrabold px-4 py-1 mt-2"}>
                Startpagina
              </div>
            </div>
          </div>
          <div className="col-span-1">
            Trends voor jou
          </div>
        </div>
      </div>
    </>
  )
}
