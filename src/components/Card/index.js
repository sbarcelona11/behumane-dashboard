import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-[15px] justify-between w-full">
      <div className="flex gap-6 items-center">
        <div className="">
          <Image
            width={50}
            height={50}
            src={"/images/profile.png"}
            alt="User"
            className="rounded-full"
          />
        </div>
        <h2 className="text-lg text-black font-bold">8th Grade</h2>
      </div>
      <div className="flex gap-6 flex-col">
        <div className="mt-6">
          <h1 className="text-lg text-black font-bold">Adventurer</h1>
        </div>
        <div className="flex flex-row justify-between gap-20">
          <div>
            <p className="font-medium">Play Time</p>
            <p className="font-thin text-zinc-500">3 h 1 m 50s</p>
          </div>
          <div>
            <p className="font-medium">Current Score</p>
            <p className="font-thin text-zinc-500">250 points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
