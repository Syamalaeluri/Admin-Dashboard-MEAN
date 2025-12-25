import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../services/admin.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent implements OnInit {

  totalUsers = 0;
  recentUsers = 0;
  users: any[] = [];
  chart: Chart | null = null;

  constructor(
    private adminService: AdminService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    
    console.log('TOKEN:', localStorage.getItem('token'));
    console.log('USER:', localStorage.getItem('user'));

    this.loadDashboardStats();
    this.loadUsers();
  }

  
  // DASHBOARD STATS
  
  loadDashboardStats(): void {
    this.adminService.getDashboardStats().subscribe({
      next: (res: any) => {
        this.totalUsers = res.totalUsers ?? 0;
        this.recentUsers = res.recentUsers ?? 0;

        this.cdr.detectChanges();
        this.renderChart();
      },
      error: (err) => {
        console.error('Dashboard stats error:', err);
      }
    });
  }

  
  // CHART
  
  renderChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('userChart', {
      type: 'bar',
      data: {
        labels: ['Total Users', 'New Users (Last 7 Days)'],
        datasets: [{
          label: 'User Statistics',
          data: [this.totalUsers, this.recentUsers],
          backgroundColor: ['#4CAF50', '#2196F3']
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  
  // USERS
  
  loadUsers(): void {
    this.adminService.getUsers().subscribe({
      next: (res: any[]) => {
        this.users = res || [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Users load error:', err);
      }
    });
  }

  deleteUser(id: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.adminService.deleteUser(id).subscribe({
        next: () => {
          this.loadUsers();
          this.loadDashboardStats();
        },
        error: (err) => {
          console.error('Delete user error:', err);
        }
      });
    }
  }

  
  // LOGOUT
 
  logout(): void {
    localStorage.clear();
    window.location.href = '/login';
  }
}
