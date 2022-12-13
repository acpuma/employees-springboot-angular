import {Department} from "../departments/department.model";

export interface Employee {
  id: number | null;
  firstName?: string | null;
  lastName?: string | null;
  salary?: number | null;
  birthDate?: Date | null;
  active?: boolean | null;
  department?: Department| null;
}

export type NewEmployee = Omit<Employee, 'id'> & { id: null };
