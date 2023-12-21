import { Button } from "@material-tailwind/react";
import Image from "next/image";

const SliderGameItem = ({ item, handleSelect }) => {
  return (
    <div id={item.id} key={item.id} className="flex flex-col flex-grow rounded-xl bg-white p-8 gap-14 m-4 hover:drop-shadow-xl">
      <div className="w-full rounded-2xl border-2">
        <Image
          src="/images/art/ai-character.svg"
          alt="title"
          className="w-full rounded-2xl object-cover object-center"
          width="309"
          height="200"
        />
      </div>
      <div className="slider-game-item__info">
        <h4 className="text-black text-lg font-bold">{item.title}</h4>
        <p>
          <span className="text-black text-sm font-bold">
            Learning Objective:{" "}
          </span>
          {item.objective}
        </p>
        <p>
          <span className="text-black text-lg font-bold">Time Required: </span>
          {item.time} minutes
        </p>
        <p>
          <span className="text-black text-lg font-bold">Points Earned: </span>
          {item.point} social points
        </p>
        <div className="text-center justify-center mt-5">
          <Button
                size="sm"
                className="rounded-full px-16 normal-case xl:text-lg"
                variant="gradient"
                color={item.isSelected ? "blue-gray" : "red"}
                onClick={() => handleSelect(item.id)}
          >
            {item.isSelected ? "Selected" : "Select Me"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SliderGameItem;
