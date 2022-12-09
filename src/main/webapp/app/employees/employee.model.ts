export interface Employee {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  salary?: number | null;
  birthDate?: Date | null;
  active?: boolean | null;
  department?: Pick<Employee, 'id'> | null;
}

export type NewEmployee = Omit<Employee, 'id'> & { id: null };
