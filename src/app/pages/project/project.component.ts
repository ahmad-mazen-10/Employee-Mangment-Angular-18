import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IProject } from '../../model/interface/master';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  projectList: IProject[] = [];
  masterSrv = inject(MasterService);
  router = inject(Router);

  ngOnInit(): void {
    this.onGetAllProject();
  }

  onGetAllProject() {
    this.masterSrv.getAllProjects().subscribe(
      (res: IProject[]) => {
        alert('Get Projects');
        this.projectList = res;
      },
      (error) => {
        alert('API get All Projects Error');
      }
    );
  }

  onEdit(id: number) {
    this.router.navigate(['new-project', id]);
  }

  onDelete(id: number) {
    this.masterSrv.deleteProject(id).subscribe(
      () => {
        alert('Project deleted successfully!');
        this.onGetAllProject();
      },
      (error) => {
        alert('Error deleting project: ' + error.message);
      }
    );
  }
}
