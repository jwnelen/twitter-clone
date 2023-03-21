import TwitterLogo from "@/components/icons/twitterLogo";
import Button from "@/components/UI/Button";
import TreeDots from "@/components/icons/treeDots";
import React from "react";
import HomeIcon from "@/components/icons/home";

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

const Navbar = () => {
  return (
    <div className={"absolute left-0 right-0 top-0 pt-2"}>
      <div className="overflow-y-scroll min-h-screen max-h-screen pl-4 space-y-2 flex flex-col">
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
        <div className={"grow"}></div>
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
    </div>
  )
}

export default Navbar;