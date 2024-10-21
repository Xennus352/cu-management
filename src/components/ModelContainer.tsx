import React from "react";
import { ModelBox } from "./ModelBox";
import AddTeacherForm from "./AddTeacherForm";

const ModelContainer = () => {
  return (
    <div>
      <ModelBox title={"Teacher"} id={"add-teacher"}>
        <div className="m-2">
          <AddTeacherForm />
        </div>
      </ModelBox>
      <ModelBox title={"Department"} id={"add-department"}>
        <h4>test dept</h4>
      </ModelBox>
    </div>
  );
};

export default ModelContainer;
