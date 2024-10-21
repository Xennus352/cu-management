import React from "react";

type modalBoxProps = {
  title: string;
  id: string;
  children: React.ReactNode;
};
export const ModelBox = ({ title, id, children }: modalBoxProps) => {
  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* Title  */}
          <h3 className="font-bold text-lg">{title}</h3>

          <div className="">{children}</div>
        </div>
      </dialog>
    </div>
  );
};
