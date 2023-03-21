import {ImageIcon, GIFIcon, PollIcon, SmileyIcon, PlanIcon, LocationIcon} from "./icons";
import Button from "./UI/Button";
import {useState} from "react";

const TweetComposer = () => {
  const [text, setText] = useState<string>("");

  return (
    <div>
      <div className={"flex w-full"}>
        <div className={"rounded-full bg-gray-400 w-12 h-12 m-4"}></div>
        <div className={"grow"}>
          <div className="w-full mb-5">
            <input className={"w-full bg-black py-4"}
                   value={text}
                   onChange={(e) => setText(e.target.value)}
                   placeholder={"Wat houdt je bezig?"}></input>
          </div>
          <div className={"flex gap-4"}>
            <ImageIcon></ImageIcon>
            <GIFIcon></GIFIcon>
            <PollIcon></PollIcon>
            <SmileyIcon></SmileyIcon>
            <PlanIcon></PlanIcon>
            <LocationIcon></LocationIcon>
            <div className={"grow"}></div>
            <Button disabled={text?.length < 1} className={"mr-4 mb-2 disabled:opacity-60"}>Tweeten</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TweetComposer;