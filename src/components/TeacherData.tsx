"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Table from "./Table";

const TeacherData = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axios.get("/api/teacher");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center text-3xl ">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-3xl text-red-500 text-center">
        Error loading data.
      </div>
    );
  }

  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default TeacherData;
