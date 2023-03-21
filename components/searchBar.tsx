import React from "react";
import {SearchIcon, CrossIcon} from "@/components/icons";

const SearchBar = () => {
  const [search, setSearch] = React.useState<string>("");

  return (
    <div className="sticky top-0 pt-3 bg-black pb-1">
      <div className="flex bg-darkgray-500 rounded-3xl overflow-hidden
        focus-within:outline focus-within:outline-2 focus-within:outline-blue-500 items-center p-1">
        <span className={"pl-4"}>
          <SearchIcon classNames={"fill-blue-500 fill-gray-500"}></SearchIcon>
        </span>
        <input placeholder="Zoeken op Twitter"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="bg-darkgray-500 grow outline-none text-gray-500 text-sm py-2 px-4"/>
        <div className={search.length < 1 ? "hidden" : "block"} onClick={() => setSearch("")}>
          <CrossIcon classNames={"bg-blue-500 cursor-pointer rounded-full p-1 mr-3"}></CrossIcon>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;