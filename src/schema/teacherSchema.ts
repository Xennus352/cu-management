import * as yup from "yup";

export const teacherSchema = yup.object().shape({
  name: yup.string().required(),
  gender: yup.string().required(),
  age: yup.number().moreThan(19).required(),
  email: yup.string().required(),
  salary: yup.number().positive().required(),
  address: yup.string().required(),
  contact: yup.string().min(4).required(),
  departmentId: yup.string().required(),
  experience: yup.string().required(),
  isMarried: yup.boolean().optional(),
  isArchived: yup.boolean(),
});
