import Icons from "@/components/Common/Icons";
const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <>
      {type === "text" && (
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            placeholder={placeholder}
          />
          <div
            className="absolute inset-y-0 left-0 pl-3
                    flex items-center
                    pointer-events-none"
          >
            <Icons name="search" size={20} color="#000" />
          </div>
        </div>
      )}
      {type === "datetime" && (
        <div className="relative">
          <input
            type="date"
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
};

export default Input;
