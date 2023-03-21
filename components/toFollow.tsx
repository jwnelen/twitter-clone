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
    <div className={"flex space-x-3"}>
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
    <div className="bg-gray-700 p-3 rounded-2xl space-y-6">
      <span className={"text-xl font-bold"}>Wie te volgen</span>
      {people.map((p, index) => {
        return <PersonItem key={index}
                           person={p}></PersonItem>

      })}
    </div>
  )
}

export default WhoToFollow;