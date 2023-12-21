import Image from "next/image";

const Badge = ({ icon, text, point }) => {
  return (
    <div className="flex flex-col p-5 bg-white rounded-[15px] text-center justify-center items-center md:w-auto lg:w-30 xl:w-60">
        <div className="flex flex-col text-center items-center justify-center">
          <Image
            src={`/images/badges/${icon}`}
            width={100}
            height={100}
            alt="baget"
            className="items-center justify-center"
          />
          <div>
            <h2 className="text-black text-base font-normal">{text}</h2>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-thin">{`${point} points`}</p>
        </div>
    </div>
  );
};

export default Badge;
