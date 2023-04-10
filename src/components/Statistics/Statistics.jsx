import React from "react";
import { useLoaderData } from "react-router-dom";
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
    <div className="w-[95%] md:w-[80%] mx-auto pt-16 md:py-32">
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
        <h3 className="text-lg font-semibold">Assignment Marks</h3>
      </div>
    </div>
  );
};

export default Statistics;
