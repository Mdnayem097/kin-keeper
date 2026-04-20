import React from "react";
import { useOutletContext } from "react-router";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const Stats = () => {
  const [callData] = useOutletContext();

  const statsData = [
    {
      name: "Call",
      value: callData?.filter((item) => item.type === "Call").length || 0,
    },
    {
      name: "Text",
      value: callData?.filter((item) => item.type === "Text").length || 0,
    },
    {
      name: "Video",
      value: callData?.filter((item) => item.type === "Video").length || 0,
    },
  ];

  const COLORS = ["#244D3F", "#FBBF24", "#EF4444"];

  return (
    <div className="w-10/12 m-auto my-10 p-8 bg-white rounded-3xl shadow-sm">
      <h2 className="text-2xl font-bold text-[#244D3F] mb-6 text-center">
        Communication Stats
      </h2>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={statsData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={5}
              dataKey="value"
            >
              {statsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {statsData.map((item, index) => (
          <div
            key={item.name}
            className="text-center p-4 bg-gray-50 rounded-2xl"
          >
            <p className="text-gray-500 text-sm font-medium">{item.name}</p>
            <p className="text-2xl font-bold" style={{ color: COLORS[index] }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
