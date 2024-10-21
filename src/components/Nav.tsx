import React from "react";
import ModelBtn from "./ModelBtn";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 flex  justify-around items-center">
        <a className="btn btn-ghost text-xl">Next-Crud</a>

        <div className="flex gap-2 items-center justify-evenly">
          <ModelBtn id="add-teacher" name="Teacher" />
          <ModelBtn id="add-department" name="Department" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
