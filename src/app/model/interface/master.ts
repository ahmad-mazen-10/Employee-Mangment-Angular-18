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
