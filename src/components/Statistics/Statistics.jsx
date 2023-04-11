import React from "react";
import { useLoaderData } from "react-router-dom";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const { data: assignmentData } = useLoaderData();
  return (
    <>
      {/* Banner Section */}
      <div className="bg-base-200 text-center flex justify-between items-center">
        <img className="h-16 md:h-32" src={vector1} alt="" />
        <h3 className="text-gray-600 text-xl font-extrabold py-10">
          Assignment Statistics
        </h3>
        <img className="h-16 md:h-32 -mt-32" src={vector2} alt="" />
      </div>

      {/* Chart Section */}
      <div className="w-[95%] md:w-[80%] mx-auto py-12">
        <ResponsiveContainer width={"98%"} height={300}>
          <AreaChart
            width={500}
            height={500}
            data={assignmentData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="number"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="text-center">
          <p className="text-lg font-semibold text-subTitle">
            Total Assignment
          </p>
        </div>
      </div>
    </>
  );
};

export default Statistics;
