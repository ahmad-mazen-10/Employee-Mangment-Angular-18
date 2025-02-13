import { Component, inject, OnInit, signal } from '@angular/core';
import { IProject, IProjectEmployee } from '../../model/interface/master';
import { MasterService } from '../../services/master.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../model/class/Employee';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-employee',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './project-employee.component.html',
  styleUrl: './project-employee.component.css',
})
export class ProjectEmployeeComponent implements OnInit {
  projectEmployeeList = signal<IProjectEmployee[]>([]);
  projectList$: Observable<IProject[]> = new Observable<IProject[]>();
  employeeList$: Observable<Employee[]> = new Observable<Employee[]>();
  masterSrv = inject(MasterService);
  form: FormGroup = new FormGroup({});

  constructor() {
    this.initializeForm();
    this.projectList$ = this.masterSrv.getAllProjects();
    this.employeeList$ = this.masterSrv.getAllEmp();
  }

  ngOnInit(): void {
    this.getAllProjects();
  }
  initializeForm() {
    this.form = new FormGroup({
      empProjectId: new FormControl(0),
      projectId: new FormControl(0),
      empId: new FormControl(0),
      assignedDate: new FormControl(''),
      role: new FormControl(''),
      isActive: new FormControl(false),
    });
  }
  getAllProjects() {
    this.masterSrv.getAllProjectsEmp().subscribe((res: IProjectEmployee[]) => {
      this.projectEmployeeList.set(res);
    });
  }
  onSave() {
    const formValue = this.form.value;
    this.masterSrv.saveProjectEmp(formValue).subscribe(
      (res: IProjectEmployee) => {
        alert('Employee added to project created');
        this.getAllProjects();
        this.form.reset();
      },
      (error) => {
        alert('create project API error');
      }
    );
  }
}
