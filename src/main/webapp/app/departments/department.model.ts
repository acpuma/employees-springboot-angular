export interface Department {
  id: number;
  departmentName?: string | null;
}

export type NewDepartment = Omit<Department, 'id'> & { id: null };
