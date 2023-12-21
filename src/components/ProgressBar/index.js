const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 border border-black border-opacity-20 mt-3">
      <div
        className="bg-green-500 h-2.5 rounded-full"
        style={{ width: progress + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
