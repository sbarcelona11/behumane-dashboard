import Icons from "@/components/Common/Icons";
import moment from "moment";
import humanizeDuration from "humanize-duration";

// convert iso 6861 to local time
const iso8601DurationToDate = (isoDuration) => {
  const duration = moment.duration(isoDuration);
  return humanizeDuration(duration.asMilliseconds(), { round: true });
};

const formatDateTime = (date) => {
  const datetime = new Date(date);
  // Format the date to YYYY-MM-DD
  return datetime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const GameSession = ({ data }) => {
  // TODO: make a alias to class.name
  const {
    class: { name } = "N/A",
    start_time,
    end_time,
    completion_percentage,
    active_time,
  } = data;

  return (
    <div className="flex justify-center items-center text-left w-full">
      <div className="drop-shadow-lg gap-[15px] p-[30px] w-full flex bg-white h-full flex-col justify-between">
        <h2 className="text-lg">Game Session in Progress</h2>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center w-full">
            <div className="flex flex-wrap justify-around gap-5 mr-3 w-1/2">
              <Icons name="people" size={46} />
              <div className="flex w-auto flex-col justify-between">
                <p className="text-[#777777] h-[13px] text-sm">Group</p>
                <p className="text-[#3354EC] h-[15px] text-base">{name}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-around gap-5 mr-3 w-1/2">
              <Icons name="clock" size={46} color="#000" />

              <div className="gap-[9px] flex flex-col justify-between">
                <p className="text-[#777777] h-[13px] text-sm">Time Active</p>
                <p className="text-[#3A3B3C] h-[15px] text-base">
                  {iso8601DurationToDate(active_time)}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-around gap-5 mr-3 w-1/2">
              <Icons name="progress" size={46} color="#000" />

              <div className="gap-[9px] flex flex-col justify-between">
                <p className="text-[#777777] h-[13px] text-sm">
                  Percent Complete
                </p>
                <p className="text-[#3A3B3C] h-[15px] text-base">
                  {completion_percentage} %
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-around gap-5 mr-3 w-1/2">
              <Icons name="start-time" size={46} color="#000" />

              <div className="gap-[9px] flex flex-col justify-between items-center">
                <p className="text-[#777777] h-[13px] text-sm">Start Time</p>
                <p className="text-[#3A3B3C] h-[15px] text-base">
                  {/*{start_time ? start_time : "N/A"}*/}
                  {formatDateTime(start_time)}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-around gap-5 mr-3 w-1/2">
              <Icons name="end-time" size={46} color="#000" />

              <div className="gap-[9px] flex flex-col justify-between items-center">
                <p className="text-[#777777] h-[13px] text-sm">End Time</p>
                <p className="text-[#3A3B3C] h-[15px] text-base">
                  {end_time ? end_time : "N/A"}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 items-center justify-between w-1/2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Begin Discussion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSession;
