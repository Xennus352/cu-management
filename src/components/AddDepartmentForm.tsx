"use client";
import { departmentSchema } from "@/schema/teacherSchema";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddDepartmentForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(departmentSchema),
  });

  const { mutate } = useMutation({
    mutationFn: (newDept: DepartmentType) => {
      return axios.post("/api/department", newDept);
    },
    onError: (err) => {
      console.log(err);
    },
    onSuccess: () => {
      console.log("work");
      router.push("/");
    },
  });

  const onSubmit: SubmitHandler<DepartmentType> = (data) => {
    mutate(data);
  };

  return (
    <div className=" ">
      <form
        className="grid grid-cols-3 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="input  input-bordered input-accent w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Location"
          {...register("location")}
          className="input  input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Member"
          {...register("member")}
          className="input  input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="submit"
          className="btn btn-outline btn-accent flex justify-center items-center col-span-6 m-3"
          value="Create"
        />
      </form>
    </div>
  );
};

export default AddDepartmentForm;
