import React from "react";

const SearchBar = () => {
  return (
    <div className="sticky top-0 bg-black pb-1">
      <input placeholder="Zoeken op Twitter"
             className="w-full rounded-3xl py-2 px-4"/>
    </div>
  )
}

export default SearchBar;