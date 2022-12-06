export interface Department {
  id : number | null;
  departmentName?: string | null;
}

export type NewDepartment = Omit<Department, 'id'> & { id: null };
