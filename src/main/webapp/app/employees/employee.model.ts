import {Department} from "../departments/department.model";

export interface Employee {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  salary?: number | null;
  birthDate?: Date | null;
  active?: boolean | null;
  department?: Pick<Department, 'id'> | null;
}

export type NewEmployee = Omit<Employee, 'id'> & { id: null };
