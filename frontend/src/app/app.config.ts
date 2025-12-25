import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { LoginComponent } from './login/login';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),   // ✅ REQUIRED FOR LOGIN API
    provideRouter([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'admin-dashboard', component: AdminDashboardComponent }
    ])
  ]
};
