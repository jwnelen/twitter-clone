import ImageIcon from "./icons/image";
import Button from "./UI/Button";

const TweetComposer = () => {
  return (
    <div>
      <div className={"flex w-full"}>
        <div className={"rounded-full bg-gray-400 w-12 h-12 m-4"}></div>
        <div className={"grow"}>
          <div className="w-full mb-5">
            <input className={"w-full bg-black py-4"} placeholder={"Wat houdt je bezig?"}></input>
          </div>
          <div className={"flex gap-4"}>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <ImageIcon></ImageIcon>
            <div className={"grow"}></div>
            <Button className={"mr-4 mb-2"}>Tweeten</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TweetComposer;