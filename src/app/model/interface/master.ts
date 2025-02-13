export interface IApiResponse {
  message: string;
  result: boolean;
  data: any;
}

export interface IParentDept {
  departmentId: number;
  departmentName: string;
  departmentLogo: any;
}

export interface IChildDept {
  childDeptId: number;
  departmentName: string;
  parentDeptId: number;
}
export interface IProject {
  projectId: number;
  projectName: string;
  clientName: string;
  startDate: string;
  leadByEmpId: number;
  contactPerson: string;
  contactNo: string;
  emailId: string;
}

export interface IProjectEmployee {
  empProjectId: number;
  projectId: number;
  empId: number;
  assignedDate: string;
  role: string;
  isActive: boolean;
  projectName: string;
  employeeName: string;
}

export interface IDashboard {
  totalEmployee: number;
  totalProject: number;
  recentEmployee: string;
  recentProjects: string;
}
