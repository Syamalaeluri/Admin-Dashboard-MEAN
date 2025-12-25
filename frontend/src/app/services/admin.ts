import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAdminData() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: token || ''
    });

    return this.http.get('http://localhost:5000/api/admin', { headers });
  }
}

