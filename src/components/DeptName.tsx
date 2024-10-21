"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DeptName = () => {
  const { data } = useQuery({
    queryKey: ["dept"],
    queryFn: async () => {
      const res = await axios.get("api/department");
      return res.data;
    },
  });

  return (
    <>
      {data?.map((dept) => (
        <option key={dept.id} value={dept.id} className="m-1 p-1">
          {dept.name}
        </option>
      ))}
    </>
  );
};

export default DeptName;
