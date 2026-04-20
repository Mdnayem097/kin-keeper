import React from "react";
import { useOutletContext } from "react-router";

const Timeline = () => {
  const [callData] = useOutletContext([]);
  console.log(callData.length);
  return (
    <div className="w-10/12 m-auto my-10 p-8 bg-white rounded-3xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-[#244D3F]">Call Timeline</h2>

      {callData.length === 0 ? (
        <p>No call records found.</p>
      ) : (
        <div className="space-y-4">
          {callData.map((call) => (
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
