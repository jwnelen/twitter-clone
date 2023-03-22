import React from "react";
import {TwitterLogo} from "@/components/icons";


const HomeHeader = () => {
  return (
    <div className="sticky top-0 pt-3 backdrop-blur-xl border-b border-gray-700 z-20">
      <div className={"sm:hidden flex justify-center"}>
        <TwitterLogo classNames={"fill-blue-500"}></TwitterLogo>
      </div>
      <div className={"hidden sm:block text-xl font-extrabold px-4 mb-6"}>
        Startpagina
      </div>
      <div className={"flex w-full justify-around items-center"}>
        <div>
          <div className="font-bold">
            Voor jou
          </div>
          <div className="bg-blue-500 h-1 mt-3 rounded-xl"></div>
        </div>
        <div>
          <div className="text-gray-500 font-bold">
            Volgend
          </div>
          <div className="h-1 mt-3 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader;