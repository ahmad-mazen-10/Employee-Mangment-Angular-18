import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse, IChildDept } from '../model/interface/master';
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
}
