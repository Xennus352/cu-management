"use client";
import React from "react";
import { modal } from "@/utils/model";

type modalBtnProps = {
  id: string;
  name: string;
};

const ModelBtn = ({ id, name }: modalBtnProps) => {
  return (
    <div>
      <button className="btn" onClick={() => modal(id)}>
        {name}
      </button>
    </div>
  );
};

export default ModelBtn;
