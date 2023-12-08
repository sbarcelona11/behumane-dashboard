"use client";
import React, { useState } from "react";
import { Tabs, Tab } from "@/components/Common/Tabs";
import Input from "@/components/Common/Input";
import Chart from "@/components/Common/Charts";
import Accordion from "@/components/Common/Accordion";

const ClassOverview = ({ data }) => {
  const {
    social_skills = { low: 0, medium: 0, high: 0 },
    emotional_management = { low: 0, medium: 0, high: 0 },
    digital_wellbeing = { low: 0, medium: 0, high: 0 },
  } = data;

  const social_skills_values = [
    social_skills?.low,
    social_skills?.medium,
    social_skills?.high,
  ];

  const emotional_management_values = [
    emotional_management?.low,
    emotional_management?.medium,
    emotional_management?.high,
  ];

  const digital_wellbeing_values = [
    digital_wellbeing?.low,
    digital_wellbeing?.medium,
    digital_wellbeing?.high,
  ];

  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#4ABDAC", "#F7B733", "#FC4A1A"],
    labels: ["Low", "Medium", "High"],
    legend: {
      show: false,
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: 50,
          labels: {
            show: true,
            total: {
              show: false,
              showAlways: false,
              label: "Total",
              formatter: function (w) {
                return (
                  w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0) + "%"
                );
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div>
      <h3 className="m-3">Real Time Data</h3>
      <div className="grid grid-col-1 md:grid-cols-12">
        <div className="col-span-4">
          <Chart options={options} series={social_skills_values} type="donut" />
          <div className="flex flex-col text-center">
            <h4 className="text-gray-400">Social Skills</h4>
            <p className="py-3 mx-6">“{social_skills.name || ""}”</p>
          </div>
        </div>
        <div className="col-span-4">
          <Chart
            options={options}
            series={emotional_management_values}
            type="donut"
          />
          <div className="flex flex-col text-center">
            <h4 className="text-gray-400">Emotional Management</h4>
            <p className="py-3 mx-6">“{emotional_management.name || ""}”</p>
          </div>
        </div>
        <div className="col-span-4">
          <Chart
            options={options}
            series={digital_wellbeing_values}
            type="donut"
          />
          <div className="flex flex-col text-center">
            <h4 className="text-gray-400">Digital Wellbeing</h4>
            <p className="py-3 mx-6">“{digital_wellbeing.name || ""}”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentOverview = () => {
  const comp1 = () => {
    return <div></div>;
  };
  const tabs = () => {
    return (
      <Tabs name="student">
        <Tab component={comp1()}>Social Skills</Tab>
        <Tab component={comp1()}>Emotional Management</Tab>
        <Tab component={comp1()}>Healthy Tech Habits</Tab>
      </Tabs>
    );
  };

  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "student 1",
      data: tabs(),
      isOpen: false,
    },
    {
      key: 2,
      title: "student 2",
      data: tabs(),
      isOpen: false,
    },
    {
      key: 3,
      title: "student 3",
      data: tabs(),
      isOpen: false,
    },
  ]);

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
      <h3 className="m-3">Students (0)</h3>
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
const StudentChoices = ({ data }) => {
  return (
    <div className="drop-shadow-lg gap-[15px] p-[30px] w-full flex bg-white flex-col justify-between">
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
            <Tabs name="student">
              <Tab component={ClassOverview({ data })}>Class Overview</Tab>
              <Tab component={StudentOverview()}>Individual Students</Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentChoices;
