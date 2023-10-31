"use client";
import Input from "@/components/Common/Input";
import { Tabs, Tab } from "@/components/Common/Tabs";
import React, { useEffect, useState } from "react";
import Accordion from "@/components/Common/Accordion";

// const ClassOverview = (data) => {
//     console.log(data);
//   return (
//     <></>
//     // <div className="w-full">
//     //   <div className="w-[545px] h-[85px] relative">
//     //     <div className="w-[272px] h-[68.50px] left-[273px] top-[8.25px] absolute bg-emerald-400 bg-opacity-50" />
//     //     <div className="w-[21px] h-[12.38px] left-[189px] top-[43.74px] absolute text-black text-base font-medium">-10</div>
//     //     <div className="w-[25px] h-[12.38px] left-[94px] top-[43.74px] absolute text-black text-base font-medium ">-20</div>
//     //     <div className="w-6 h-[12.38px] left-0 top-[43.74px] absolute text-black text-base font-medium">-30</div>
//     //     <div className="w-[27px] h-[12.38px] left-[518px] top-[43.74px] absolute text-black text-base">+30</div>
//     //     <div className="w-[27px] h-[12.38px] left-[421px] top-[43.74px] absolute text-black text-base">+20</div>
//     //     <div className="w-[23px] h-[12.38px] left-[328px] top-[43.74px] absolute text-black text-base">+10</div>
//     //     <div className="w-[545px] h-[0px] left-0 top-[42.09px] absolute border border-black"></div>
//     //     <div className="w-[85px] h-[0px] left-[273px] top-0 absolute origin-top-left rotate-90 border border-black"></div>
//     //     <div className="w-2.5 h-[12.38px] left-[276px] top-[43.74px] absolute text-black text-base font-medium">0</div>
//     //   </div>
//     // </div>
//   );
// };

// eslint-disable-next-line no-unused-vars
const NumberLine = () => {
  const numbers = [-30, -20, -10, 0, 10, 20, 30];
  const highlightedRange = [0, 20];

  return (
    <div className="flex justify-between border border-black">
      {numbers.map((number, index) => (
        <div
          key={index}
          className={`w-1/7 ${
            index !== numbers.length - 1 ? "border-r border-black" : ""
          } 
          ${
            number >= highlightedRange[0] && number <= highlightedRange[1]
              ? "bg-blue-200"
              : ""
          } 
          text-center relative`}
        >
          {number === 0 && (
            <div className="absolute w-full h-0.5 bg-black bottom-0"></div>
          )}
          {index === Math.floor(numbers.length / 2) && (
            <div className="absolute w-0.5 h-full bg-black right-0"></div>
          )}
          {number}
        </div>
      ))}
    </div>
  );
};

const comp1 = (data) => {
  const {
    scenario,
    characters,
    transcript,
    personalized_summary,
    trend_indicators,
    actionable_feedback_and_recomendations,
  } = data;
  return (
    <div>
      <p className="font-bold">Scenario: </p>
      <div className="my-3">
        <p>{scenario.name}</p>
      </div>
      <p className="font-bold">Characters: </p>
      <div className="my-3">
        {characters.map((character, index) => (
          <p key={index}>{character}</p>
        ))}
      </div>
      <p className="font-bold">Transcript: </p>
      <div className="my-3">
        <p>{transcript}</p>
      </div>

      <p className="font-bold">Personalized Summary: </p>
      <div className="my-3">
        <p>{personalized_summary}</p>
      </div>
      <p className="font-bold">Emotional Intelligence Trend Indicators: </p>
      <div className="my-3">
        {trend_indicators.map((indicator, index) => (
          <div key={index} className="flex flex-row justify-between">
            <p>
              {" "}
              {index + 1}. {indicator}
            </p>
          </div>
        ))}
      </div>
      <p className="font-bold">Actionable Feedback and Recommendations: </p>
      <div className="my-3">
        {actionable_feedback_and_recomendations.map((indicator, index) => (
          <div key={index} className="flex flex-row justify-between">
            <p>
              {" "}
              {index + 1}. {indicator}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const IndividuaLSudenTabs = (data) => {
  return (
    <Tabs name="student">
      <Tab component={comp1(data)}>Social Skills</Tab>
      <Tab component={comp1(data)}>Emotional Management</Tab>
      <Tab component={comp1(data)}>Healthy Tech Habits</Tab>
    </Tabs>
  );
};
const StudentOverview = (data) => {
  const [accordions, setAccordion] = useState([]);

  useEffect(() => {
    const updatedAccordions = data.map((el) => {
      return {
        key: el.student.id,
        title: `${el.student.first_name} ${el.student.last_name}`,
        data: IndividuaLSudenTabs(el),
        isOpen: false,
      };
    });
    setAccordion(updatedAccordions);
  }, [data]);

  // {
  //       key: 1,
  //       title: 'test 2',
  //       data: tabs(),
  //       isOpen: false
  //     },

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div className="w-full">
      <h3 className="m-3">Students ({accordions.length})</h3>
      <div className="inline-flex flex-col w-full">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </div>
  );
};

const PerformanceInsight = ({ data }) => {
    // eslint-disable-next-line no-unused-vars
  const { class_overview, individual_students } = data;
  return (
    <div className="drop-shadow-lg gap-[15px] p-[30px] w-full flex bg-white h-full flex-col justify-between">
      <div className="flex justify-center items-center w-full">
        <div className="h-full bg-white w-full">
          <h2 className="text-lg">Student Choices Overview</h2>
          <div className="flex flex-col md:flex-row w-full pt-3">
            <div className="w-full my-2 md:w-3/5 mr-10 md:my-1">
              <Input type="text" placeholder="Search for a student here" />
            </div>
            <div className="w-full my-2 md:w-2/5 md:my-1">
              <Input type="datetime" placeholder="Search for a student here" />
            </div>
          </div>
          <div className="flex flex-col">
            <Tabs name="performance">
              {/*<Tab component={ClassOverview(class_overview)}>*/}
              {/*  Class Overview*/}
              {/*</Tab>*/}
              <Tab component={StudentOverview(individual_students)}>
                Individual Students
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceInsight;
