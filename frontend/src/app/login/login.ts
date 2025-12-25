import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        console.log('LOGIN RESPONSE:', res);

        
        localStorage.setItem('token', res.token || '');
        localStorage.setItem('user', JSON.stringify(res.user || {}));

        
        window.location.href = '/admin-dashboard';
      },
      error: () => {
        alert('Login failed');
      }
    });
  }
}
