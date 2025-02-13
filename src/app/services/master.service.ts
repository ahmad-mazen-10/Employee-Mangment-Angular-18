import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IApiResponse,
  IChildDept,
  IDashboard,
  IProject,
  IProjectEmployee,
} from '../model/interface/master';
import { Observable } from 'rxjs';
import { Employee } from '../model/class/Employee';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private _HttpClient: HttpClient) {}
  readonly ApiUrl: string =
    'https://projectapi.gerasim.in/api/EmployeeManagement/';

  getAllDept(): Observable<IApiResponse> {
    return this._HttpClient.get<IApiResponse>(
      `${this.ApiUrl}GetParentDepartment`
    );
  }

  getAllEmp(): Observable<Employee[]> {
    return this._HttpClient.get<Employee[]>(`${this.ApiUrl}GetAllEmployees`);
  }

  getChildByDeptId(deptId: number): Observable<IApiResponse> {
    return this._HttpClient.get<IApiResponse>(
      `${this.ApiUrl}GetChildDepartmentByParentId?deptId=${deptId}`
    );
  }

  saveEmployee(obj: Employee): Observable<IApiResponse> {
    debugger;
    return this._HttpClient.post<IApiResponse>(
      `${this.ApiUrl}CreateEmployee`,
      obj
    );
  }

  updateEmployee(obj: Employee): Observable<IApiResponse> {
    return this._HttpClient.put<IApiResponse>(
      `${this.ApiUrl}UpdateProjectEmployee/${obj.employeeId}`,
      obj
    );
  }

  deleteEmployeeById(id: number): Observable<IApiResponse> {
    return this._HttpClient.delete<IApiResponse>(
      `${this.ApiUrl}DeleteEmployee/${id}`
    );
  }

  // project operation
  saveProject(obj: Employee): Observable<IProject> {
    debugger;
    return this._HttpClient.post<IProject>(`${this.ApiUrl}CreateProject`, obj);
  }

  deleteProject(id: number): Observable<void> {
    debugger;
    return this._HttpClient.delete<void>(`${this.ApiUrl}DeleteProject${id}`);
  }

  getAllProjects(): Observable<IProject[]> {
    return this._HttpClient.get<IProject[]>(`${this.ApiUrl}GetAllProjects`);
  }

  getProjectById(id: number): Observable<IProject> {
    return this._HttpClient.get<IProject>(`${this.ApiUrl}GetProject/${id}`);
  }

  updateProjectById(objProj: IProject): Observable<IProject> {
    return this._HttpClient.put<IProject>(
      `${this.ApiUrl}UpdateProject/${objProj.projectId}`,
      objProj
    );
  }

  getAllProjectsEmp(): Observable<IProjectEmployee[]> {
    return this._HttpClient.get<IProjectEmployee[]>(
      `${this.ApiUrl}GetAllProjectEmployees`
    );
  }

  getProjectEmp(id: number): Observable<IProjectEmployee[]> {
    return this._HttpClient.get<IProjectEmployee[]>(
      `${this.ApiUrl}GetProjectEmployee/${id}`
    );
  }

  saveProjectEmp(objProjEmp: IProjectEmployee): Observable<IProjectEmployee> {
    debugger;
    return this._HttpClient.post<IProjectEmployee>(
      `${this.ApiUrl}CreateProject`,
      objProjEmp
    );
  }

  updateProjectEmp(objProjEmp: IProjectEmployee): Observable<IProjectEmployee> {
    return this._HttpClient.put<IProjectEmployee>(
      `${this.ApiUrl}UpdateProjectEmployee/${objProjEmp.projectId}`,
      objProjEmp
    );
  }

  // dashboard
  getDashboardData() {
    return this._HttpClient.get<any>(`${this.ApiUrl}GetDashboard`);
  }
}
