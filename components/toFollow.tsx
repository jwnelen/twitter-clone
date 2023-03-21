import React from "react";
import Button from "@/components/UI/Button";
import {VerifiedIcon} from "@/components/icons";

interface Person {
  name: string,
  username: string,
  verified: boolean,
}

const people: Person[] = [
  {
    name: 'Mira Murati',
    username: 'miramurati',
    verified: false
  },
  {
    name: 'Oriol Vingyals',
    username: 'OriolVinyalsML',
    verified: true
  },
  {
    name: 'Jeroen Nelen',
    username: "jeroentjuuhh",
    verified: false
  }
]

const PersonItem = ({person}: { person: Person }) => {
  const {name, username} = person

  return (
    <div className={"flex space-x-3 hover:bg-gray-600 cursor-pointer px-4 py-2"}>
      <div className={"rounded-full bg-gray-400 w-10 h-10"}></div>
      <div className={"flex grow flex-col"}>
        <div className={"font-bold flex items-center space-x-1"}>
          <span>{name} </span>
          <VerifiedIcon></VerifiedIcon></div>
        <span className={"text-sm text-gray-400"}>{`@${username}`}</span>
      </div>
      <div>
        <Button className={"bg-white text-black"}>Volgen</Button>
      </div>
    </div>
  )
}

const WhoToFollow = () => {
  return (
    <div className="bg-gray-700 rounded-2xl space-y-3 overflow-hidden">
      <div className={"text-xl font-bold px-3 pt-3"}>Wie te volgen</div>
      {people.map((p, index) => {
        return <PersonItem key={index}
                           person={p}></PersonItem>

      })}
      <div className="text-blue-500 cursor-pointer p-3 hover:bg-gray-600">Meer weergeven</div>
    </div>
  )
}

export default WhoToFollow;