"use client";
import React, { useState } from "react";

const generateKey = () => {
    return Math.trunc(Math.random() * 1000).toString();
};
const Tabs = ({ children, name }) => {
  const findActiveTab = (a) => {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  };

  const [activeTab, setActiveTab] = useState(findActiveTab(children));

  return (
    <>
      <div className="flex gap-2 p-2">
        {children.map((item, i) => {
          return (
            <>
                <Tab
                  key={`tab-${i}-${name}-${generateKey()}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </Tab>
            </>
          );
        })}
      </div>
      <div className="flex flex-row p-5">
        {children.map((item, i) => {
          return (
            <div key={`element-${i}-${name}-${generateKey()}`}
              className={`w-full ${i === activeTab ? "visible" : "hidden"}`}
            >
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

 const Tab = ({ children, activeTab, currentTab, setActiveTab }) => {
  return (
    <>
      <div
        className={`flex flex-row px-5 py-1 cursor-pointer text-black ${
          activeTab === currentTab ? "text-blue-500 border-b border-b-blue-500" : "text-gray-500"
        }`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

export {
    Tabs,
    Tab
}
