const Cards = ({ data }) => {
  const {
    diversity_of_choices,
    scenario_exploration,
    reflection_and_understanding,
  } = data;
  return (
    <>
      <div className="flex md:gap-2 flex-col flex-wrap md:flex-row w-full justify-between">
        <div className="bg-white px-7.5 shadow-default my-5 md:my-1">
          <div className="flex justify-center items-center">
            <div className="pt-[85px] drop-shadow-lg px-[22px] h-full pb-8 relative bg-white flex justify-center w-full">
              <p className="w-[79px] font-[600] text-[#3A3B3C] h-[34px] left-5 top-5 absolute text-lg text-left">
                Diversity of Choices
              </p>
              <div className="gap-[21px] font-[400] flex flex-col justify-between items-center h-full w-full">
                <p className="text-[#3354EC] w-[89px] text-5xl text-left h-11">
                  {diversity_of_choices * 100}%
                </p>
                <p className="text-[#3A3B3C] h-[22px] w-36 text-xs text-center">
                  of students are trying new choices for these scenarios
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-7.5 shadow-default my-5 md:my-1">
          <div className="flex justify-center items-center">
            <div className="pt-[85px] drop-shadow-lg px-[22px] h-full pb-8 relative bg-white flex justify-center w-full">
              <p className="w-[79px] font-[600] text-[#3A3B3C] h-[34px] left-5 top-5 absolute text-lg text-left">
                Scenario Exploration
              </p>
              <div className="gap-[21px] font-[400] flex flex-col justify-between items-center h-full w-full">
                <p className="text-[#3354EC] w-[89px] text-5xl text-left h-11">
                  {scenario_exploration * 100}%
                </p>
                <p className="text-[#3A3B3C] h-[22px] w-36 text-xs text-center">
                  of students have not tried these scenarios before
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-7.5 shadow-default my-5 md:my-1">
          <div className="flex justify-center items-center">
            <div className="drop-shadow-lg px-[22px] h-full pt-20 pb-5 relative bg-white flex justify-center w-full">
              <p className="w-[118px] font-[600] text-[#3A3B3C] h-[34px] left-5 top-5 absolute text-lg text-left">
                Reflection & Understanding
              </p>
              <div className="gap-[27px] flex flex-col justify-between items-center h-full w-full text-center">
                <p className="font-[500] text-[#3354EC80] text-2xl h-11 w-28">
                  {reflection_and_understanding ? reflection_and_understanding : 'Session in progress'}
                </p>
                <p className="font-[400] text-[#3A3B3C] h-[33px] w-36 text-xs">
                  of students filled out reflection surveys for this scenario
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
