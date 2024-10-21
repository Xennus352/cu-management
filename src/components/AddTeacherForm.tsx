"use client";
import { teacherSchema } from "@/schema/teacherSchema";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const AddTeacherForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(teacherSchema),
  });
  const onSubmit = (e: any) => {
    
  };
  return (
    <div className=" ">
      <form
        className="grid grid-cols-6 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="input col-span-3 input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="input col-span-3 input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Experience"
          {...register("experience")}
          className="input col-span-2 input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Contact"
          {...register("contact")}
          className="input col-span-2 input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          max-w-xs
          placeholder="Address"
          {...register("address")}
          className="input col-span-2 input-bordered input-accent w-full max-w-xs"
        />{" "}
        <input
          type="text"
          placeholder="Salary"
          {...register("salary")}
          className="input col-span-2 input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Age"
          {...register("age")}
          className="input col-span-2 input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Gender"
          {...register("gender")}
          className="input col-span-2 input-bordered input-accent w-full max-w-xs"
        />
        <select
          className="select col-span-6 select-accent w-full "
          {...register("departmentId")}
        >
          <option>CU</option>
          <option>TU</option>
        </select>
        <div className="form-control col-span-6">
          <label className="cursor-pointer label">
            <span className="label-text">Is Married</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-accent"
              {...register("isMarried")}
            />
          </label>
        </div>
        <input
          type="submit"
          className="btn btn-outline btn-accent flex justify-center items-center col-span-6 m-3"
          value="Create"
        />
      </form>
    </div>
  );
};

export default AddTeacherForm;