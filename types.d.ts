type Teacher = {
  id?: string;
  name: string;
  gender: string;
  age: number;
  email: string;
  salary: number;
  address: string;
  contact: string;
  departmentId: string;
  experience: string;
  isMarried?: Boolean;
  isArchived?: Boolean;
  Department?: {
    id: string;
    name: string;
    location: string;
    member: number;
    isArchieved?: false;
  };
};

type DepartmentType = {
  id: string;
  name: string;
  location: string;
  member: number;
  isArchieved: Boolean;
};
