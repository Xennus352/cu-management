import React from "react";
import { ModelBox } from "./ModelBox";
import AddTeacherForm from "./AddTeacherForm";
import AddDepartmentForm from "./AddDepartmentForm";

const ModelContainer = () => {
  return (
    <div>
      <ModelBox title={"Teacher"} id={"add-teacher"}>
        <div className="m-2">
          <AddTeacherForm />
        </div>
      </ModelBox>
      <ModelBox title={"Department"} id={"add-department"}>
        <AddDepartmentForm />
      </ModelBox>
    </div>
  );
};

export default ModelContainer;
