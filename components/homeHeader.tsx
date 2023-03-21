import React from "react";


const HomeHeader = () => {
  return (
    <div className="sticky top-0 backdrop-blur-xl">
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
  )
}

export default HomeHeader;