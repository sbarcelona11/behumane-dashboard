"use client";
import React, { useState, useRef, useCallback } from "react";
import { Button } from "@material-tailwind/react";
import SliderGames from "@/components/SliderGames";
import Icons from "@/components/Common/Icons";
import {
  SlideNextButton,
  SlidePrevButton,
} from "@/components/Common/SlideButtons";

const GameSelector = () => {
  const scenarioElementsItems = {
    "social-skills": [
      {
        id: 1,
        image: "ai-character.svg",
        title: "Cafeteria Conundrum",
        objective:
          "Enhance social awareness and relationship skills by resolving a misunderstandings in peer interactions.",
        time: 25,
        point: 50,
        isSelected: false,
      },
      {
        id: 2,
        image: "ai-character.svg",
        title: "Feeling the Pressure",
        objective:
          "Balancing everything in life is not easy. Learn that it’s okay to ask for help and what works best to feel balanced.",
        time: 30,
        point: 75,
        isSelected: false,
      },
      {
        id: 3,
        image: "ai-character.svg",
        title: "How Can I Help?",
        objective:
          "Learn what strategies work best when trying to help a friend in need and understanding their feelings.",
        time: 15,
        point: 50,
        isSelected: false,
      },
      {
        id: 4,
        image: "ai-character.svg",
        title: "Cafeteria Conundrum",
        objective:
          "Enhance social awareness and relationship skills by resolving a misunderstandings in peer interactions.",
        time: 25,
        point: 50,
        isSelected: false,
      },
      {
        id: 5,
        image: "ai-character.svg",
        title: "Feeling the Pressure",
        objective:
          "Balancing everything in life is not easy. Learn that it’s okay to ask for help and what works best to feel balanced.",
        time: 30,
        point: 75,
        isSelected: false,
      },
      {
        id: 6,
        image: "ai-character.svg",
        title: "How Can I Help?",
        objective:
          "Learn what strategies work best when trying to help a friend in need and understanding their feelings.",
        time: 15,
        point: 50,
        isSelected: false,
      },
    ],
    "emotional-management": [
      {
        id: 7,
        image: "ai-character.svg",
        title: "Feeling the Pressure",
        objective:
          "Balancing everything in life is not easy. Learn that it’s okay to ask for help and what works best to feel balanced.",
        time: 30,
        point: 75,
        isSelected: false,
      },
      {
        id: 8,
        image: "ai-character.svg",
        title: "Cafeteria Conundrum",
        objective:
          "Enhance social awareness and relationship skills by resolving a misunderstandings in peer interactions.",
        time: 25,
        point: 50,
        isSelected: false,
      },
      {
        id: 9,
        image: "ai-character.svg",
        title: "How Can I Help?",
        objective:
          "Learn what strategies work best when trying to help a friend in need and understanding their feelings.",
        time: 15,
        point: 50,
        isSelected: false,
      },
      {
        id: 10,
        image: "ai-character.svg",
        title: "Cafeteria Conundrum",
        objective:
          "Enhance social awareness and relationship skills by resolving a misunderstandings in peer interactions.",
        time: 25,
        point: 50,
        isSelected: false,
      },
      {
        id: 11,
        image: "ai-character.svg",
        title: "Feeling the Pressure",
        objective:
          "Balancing everything in life is not easy. Learn that it’s okay to ask for help and what works best to feel balanced.",
        time: 30,
        point: 75,
        isSelected: false,
      },
      {
        id: 12,
        image: "ai-character.svg",
        title: "How Can I Help?",
        objective:
          "Learn what strategies work best when trying to help a friend in need and understanding their feelings.",
        time: 15,
        point: 50,
        isSelected: false,
      },
    ],
    "digital-wellbeing": [
      {
        id: 13,
        image: "ai-character.svg",
        title: "How Can I Help?",
        objective:
          "Learn what strategies work best when trying to help a friend in need and understanding their feelings.",
        time: 15,
        point: 50,
        isSelected: false,
      },
      {
        id: 14,
        image: "ai-character.svg",
        title: "Cafeteria Conundrum",
        objective:
          "Enhance social awareness and relationship skills by resolving a misunderstandings in peer interactions.",
        time: 25,
        point: 50,
        isSelected: false,
      },
      {
        id: 15,
        image: "ai-character.svg",
        title: "Feeling the Pressure",
        objective:
          "Balancing everything in life is not easy. Learn that it’s okay to ask for help and what works best to feel balanced.",
        time: 30,
        point: 75,
        isSelected: false,
      },
      {
        id: 16,
        image: "ai-character.svg",
        title: "Cafeteria Conundrum",
        objective:
          "Enhance social awareness and relationship skills by resolving a misunderstandings in peer interactions.",
        time: 25,
        point: 50,
        isSelected: false,
      },
      {
        id: 17,
        image: "ai-character.svg",
        title: "Feeling the Pressure",
        objective:
          "Balancing everything in life is not easy. Learn that it’s okay to ask for help and what works best to feel balanced.",
        time: 30,
        point: 75,
        isSelected: false,
      },
      {
        id: 18,
        image: "ai-character.svg",
        title: "How Can I Help?",
        objective:
          "Learn what strategies work best when trying to help a friend in need and understanding their feelings.",
        time: 15,
        point: 50,
        isSelected: false,
      },
    ],
  };

  const [selected, setSelected] = useState("social-skills");
  const [scenarioElements, setScenarioElements] = useState(
    scenarioElementsItems[selected],
  );
  const [selectedScenarios, setSelectedScenarios] = useState([]);
  const sliderRef = useRef(null);
  const getScenarioElements = (index) => {
    return scenarioElementsItems[index];
  };

  const isSelectedScenario = (scenario) => {
    const newScenario = scenarioElements.map((item) => {
      if (item.id === scenario.id) {
        return scenario;
      }
      return item;
    });
    setScenarioElements(newScenario);
  }

  const handleSelect = (index) => {
    setSelected(index);
    const scenarioElement = getScenarioElements(index);
    setScenarioElements(scenarioElement);
  };

  const handleSelectScenario = (index) => {
    const scenarioElement = getScenarioElements(selected);
    const scenario = scenarioElement[index-1];
    // isSelected
    if (!selectedScenarios.find(x => x.id === scenario.id) && selectedScenarios.length < 3) {
        const newScenario = {...scenario, isSelected: true};
        setSelectedScenarios([...selectedScenarios, newScenario]);
        isSelectedScenario(newScenario)
        return;
    }
    // unselect
    if(selectedScenarios.find(x => x.id === scenario.id)) {
        const newScenario = {...scenario, isSelected: false};
        const newSelectedScenarios = selectedScenarios.filter(x => x.id !== scenario.id);
        setSelectedScenarios(newSelectedScenarios);
        isSelectedScenario(newScenario)
        return;
    }

    console.log("You can't select more than 3 scenarios")
  };

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

  return (
    <div className="game-selector">
      <h1 className="text-black text-[32px] font-bold">
        Choose your own adventure
      </h1>

      <div className="flex flex-row flex-grow w-full justify-between pt-10">
        <div>
          <Button
            className="flex items-center gap-3 rounded-full border border-black text-black font-bold normal-case xl:px-16 xl:text-lg"
            size="sm"
            variant={selected === "social-skills" ? "gradient" : "outlined"}
            color={selected === "social-skills" ? "amber" : "blue-gray"}
            onClick={() => handleSelect("social-skills")}
            fullWidth
          >
            Social skills
          </Button>
        </div>
        <div>
          <Button
            className="flex items-center gap-3 rounded-full bg-white text-black font-bold normal-case xl:px-16 xl:text-lg"
            size="sm"
            variant={
              selected === "emotional-management" ? "gradient" : "outlined"
            }
            color={selected === "emotional-management" ? "amber" : "blue-gray"}
            onClick={() => handleSelect("emotional-management")}
          >
            Emotional management
          </Button>
        </div>
        <div>
          <Button
            className="flex items-center gap-3 rounded-full bg-white text-black font-bold normal-case xl:px-16 xl:text-lg"
            size="sm"
            variant={selected === "digital-wellbeing" ? "gradient" : "outlined"}
            color={selected === "digital-wellbeing" ? "amber" : "blue-gray"}
            onClick={() => handleSelect("digital-wellbeing")}
          >
            Digital wellbeing
          </Button>
        </div>
        <div>
          <Button
            className="flex items-center gap-3 rounded-full bg-white text-black font-bold normal-case xl:px-16 xl:text-lg"
            size="sm"
            variant="gradient"
            color="amber"
          >
            {selectedScenarios.length} of 3 scenarios selected
          </Button>
        </div>
      </div>
      <div className="pt-10">
        <SliderGames reference={sliderRef} items={scenarioElements} handleSelect={handleSelectScenario}/>
      </div>
      <div className="flex text-center items-center justify-around mt-10">
        <SlidePrevButton handle={handlePrev}/>
        <Button
          className="flex items-center gap-1 rounded-full bg-white normal-case text-white font-bold px-24 xl:text-lg"
          size="lg"
          variant="gradient"
          color="red"
        >
          Play
          <Icons name="circle-right" size="17" color="none" />
        </Button>
        <SlideNextButton handle={handleNext}/>
      </div>
    </div>
  );
};

export default GameSelector;
