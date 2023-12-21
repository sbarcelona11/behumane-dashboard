const Accordion = ({ isOpen, title, toggleAccordion, data }) => {
  return (
    <div className="border-b border-b-gray-700 mb-1">
      <button
        className="w-full p-4 text-left transition duration-300"
        onClick={toggleAccordion}
      >
        {title}
        <span
          className={`float-right transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          &#9660;
        </span>
      </button>
      {isOpen && <div className="p-4 bg-white">{data}</div>}
    </div>
  );
};

export default Accordion;
