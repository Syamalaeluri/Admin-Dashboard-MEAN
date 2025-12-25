import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardStats {
  totalUsers: number;
  recentUsers: number;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  private readonly baseUrl = 'http://localhost:5000/api/admin';

  constructor(private http: HttpClient) {}

  
  // DASHBOARD ANALYTICS
  
  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(
      `${this.baseUrl}/dashboard-stats`
    );
  }

  
  // USER MANAGEMENT
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseUrl}/users`
    );
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}/users/${id}`
    );
  }
}








