import React from "react";

const Table = ({ data }) => {

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-md text-3xl table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Name</td>
              <td>Email</td>
              <td>Gender</td>
              <td>Location</td>
              <td>Experience</td>
              <td>Department</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((teacher: Teacher, index: string) => (
              <tr key={teacher.id}>
                <th>{index + 1}</th>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.gender}</td>
                <td>{teacher.address}</td>
                <td>{teacher.experience}</td>
                <td>{teacher.Department && teacher.Department.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
