import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDashboard } from '../../model/interface/master';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  masterSrv = inject(MasterService);
  dashboardData: any;
  // dashboardData!: IDashboard;

  ngOnInit(): void {
    this.getDashboard();
  }
  getDashboard() {
    this.masterSrv.getDashboardData().subscribe(
      (res: any) => {
        this.dashboardData = res;
      },
      (error) => {
        alert('API get dashboard Error');
      }
    );
  }
}
