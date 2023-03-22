import TwitterLogo from "@/components/icons/twitterLogo";
import Button from "@/components/UI/Button";
import {
  HomeIcon,
  HashtagIcon,
  ProfileIcon,
  moreIcon,
  NotificationBell,
  InboxIcon,
  TwitterBlueIcon,
  SaveIcon,
  ThreeDots,
  NewTweetIcon
} from "@/components/icons";
import React from "react";

const NavBarItem = ({text, isActive, CurrentIcon}
                      : { text: string, isActive: boolean, CurrentIcon: () => JSX.Element }) => {
  return (
    <div className={`text-lg flex cursor-pointer ${isActive && "font-extrabold"}`}>
      <div className={'pl-2 pr-5'}>
        <CurrentIcon></CurrentIcon>
      </div>
      <span className={'hidden xl:block'}>
        {text}
              </span>
    </div>
  )
}

const Navbar = () => {
  const NewTweetButton = () => {
    return <div className={"xl:mr-10 pt-5 xl:w-full cursor-pointer"}>
      <Button className={"hidden xl:block xl:min-w-full px-5 py-3"}>Tweeten</Button>
      <Button className={"xl:hidden rounded-full pt-4 pb-4"}>
        <NewTweetIcon></NewTweetIcon>
      </Button>
    </div>
  }

  return (
    <div className={"absolute left-0 right-0 top-0"}>
      <div className="overflow-y-scroll min-h-screen max-h-screen space-y-5
          flex flex-col items-end xl:items-start p-4">
        <div className={"mb-2 pr-4 xl:pr-0"}>
          <TwitterLogo></TwitterLogo>
        </div>
        <NavBarItem isActive={true} CurrentIcon={HomeIcon} text="Startpagina"></NavBarItem>
        <NavBarItem isActive={false} CurrentIcon={HashtagIcon} text="Verkennen"></NavBarItem>
        <NavBarItem isActive={false} CurrentIcon={NotificationBell} text="Meldingen"></NavBarItem>
        <NavBarItem isActive={false} CurrentIcon={InboxIcon} text="Berichten"></NavBarItem>
        <NavBarItem isActive={false} CurrentIcon={SaveIcon} text="Bladwijzers"></NavBarItem>
        <NavBarItem isActive={false} CurrentIcon={TwitterBlueIcon} text="Twitter Blue"></NavBarItem>
        <NavBarItem isActive={false} CurrentIcon={ProfileIcon} text="Profiel"></NavBarItem>
        <NavBarItem isActive={false} CurrentIcon={moreIcon} text="Meer"></NavBarItem>
        <NewTweetButton></NewTweetButton>

        {/* a div to have the empty space*/}
        <div className={"grow"}></div>
        <div className={"w-full block xl:hidden"}>
          <div className={"rounded-full bg-gray-400 min-w-min min-h-min w-12 h-12 ml-auto mr-2"}></div>
        </div>

        <div className={"hidden xl:flex space-x-2 items-center w-full"}>
          <div className={"rounded-full bg-gray-400 w-10 h-10"}></div>
          <div className={" xl:flex xl:grow flex-col"}>
                <span className={"font-bold"}>
                  Jeroen
                </span>
            <span className={"text-gray-400"}>
                  @Jeroen2232
                </span>
          </div>
          <div className={"hidden xl:block"}>
            <ThreeDots></ThreeDots>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;