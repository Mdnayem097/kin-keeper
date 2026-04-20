import React, { useState } from "react";
import { useOutletContext } from "react-router";

const Timeline = () => {
  const [callData] = useOutletContext([]);
  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["All", "Call", "Video", "Text"];

  const filteredData = callData.filter((call) => {
    if (filter === "All") return true;
    return call.type.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <div className="w-10/12 m-auto my-10 p-8 bg-white rounded-3xl shadow-sm">
      <div className="flex justify-between items-center mb-6 relative">
        <h2 className="text-2xl font-bold text-[#244D3F]">Call Timeline</h2>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-32 px-4 py-2 bg-gray-100 text-[#244D3F] font-semibold rounded-xl border border-gray-200 hover:bg-gray-200 transition-all"
          >
            {filter}
            <span
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-xl shadow-lg z-10 overflow-hidden">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setFilter(option);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-[#244D3F] hover:text-white transition-colors ${
                    filter === option
                      ? "bg-[#244D3F] text-white"
                      : "text-gray-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {filteredData.length === 0 ? (
        <p>No call records found.</p>
      ) : (
        <div className="space-y-4">
          {filteredData.map((call) => (
            <div
              key={call.id}
              className="p-4 border-l-4 border-[#244D3F] bg-gray-50 rounded-r-xl"
            >
              <div className="flex">
                <div>
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={call.picture}
                  ></img>
                </div>
                <div>
                  <p className="font-bold text-[#244D3F]">
                    {call.type}
                    <span className="text-[#64748B] text-xs ml-2">
                      With {call.name}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Called at: {call.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
