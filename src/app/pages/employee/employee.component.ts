import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import {
  IApiResponse,
  IChildDept,
  IParentDept,
} from '../../model/interface/master';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/class/Employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  masterSev = inject(MasterService);

  isFormVisible = signal<boolean>(false);
  parentDeptList = signal<IParentDept[]>([]);
  childDeptList = signal<IChildDept[]>([]);

  employeeObj: Employee = new Employee();

  employeeList: Employee[] = [];
  parentDeptId: number = 0;

  ngOnInit(): void {
    this.getParentDept();
    this.getAllEmployees();
  }

  getParentDept() {
    this.masterSev.getAllDept().subscribe((res: IApiResponse) => {
      this.parentDeptList.set(res.data);
    });
  }

  getAllEmployees() {
    this.masterSev.getAllEmp().subscribe((res: Employee[]) => {
      // console.log('Employees Data:', res);
      this.employeeList = res;
    });
  }

  onDeptChange() {
    this.masterSev
      .getChildByDeptId(this.parentDeptId)
      .subscribe((res: IApiResponse) => {
        this.childDeptList.set(res.data);
      });
  }

  onSave() {
    debugger;
    this.masterSev.saveEmployee(this.employeeObj).subscribe(
      (res: IApiResponse) => {
        alert('Employee Created');
        this.getAllEmployees();
        this.employeeObj = new Employee();
        console.log('Employee :', res.data);
      },
      (error) => {
        console.error('Error:==>', error);
      }
    );
  }

  onEdit(data: Employee) {
    this.employeeObj = data;
    this.isFormVisible.set(true);
  }

  onUpdate() {
    this.masterSev.updateEmployee(this.employeeObj).subscribe(
      (res: IApiResponse) => {
        alert('Employee Updated');
        this.getAllEmployees();
        this.employeeObj = new Employee();
        console.log('Employee Updated:', res.data);
      },
      (error) => {
        alert('API Error');
      }
    );
  }

  onDelete(id: number) {
    const isDelete = confirm('Do U sure delete this employee');
    if (isDelete) {
      this.masterSev.deleteEmployeeById(id).subscribe(
        (res: IApiResponse) => {
          if (res.data) {
            alert('Employee deleted');
            this.getAllEmployees();
          } else {
            alert('Failed to delete employee');
          }
          console.log(res.message);
        },
        (error) => {
          alert('API Error');
          console.error('API Error:', error);
        }
      );
    }
  }
}

// 1 : 02
