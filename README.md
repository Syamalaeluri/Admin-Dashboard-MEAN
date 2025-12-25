# Admin Dashboard with Analytics & Reporting (MEAN Stack)

## Project Description
This project is a full-stack Admin Dashboard application developed using the MEAN stack.
It allows administrators to securely log in, view analytics, visualize data using charts,
and manage users efficiently.

The project demonstrates real-world use cases such as CRM dashboards, analytics platforms,
and admin panels used in modern web applications.

---

## Tech Stack
- **Frontend:** Angular
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Charts:** Chart.js
- **Authentication:** JWT (JSON Web Token)

---

## Key Features
- Secure Admin Authentication
- Role-Based Authorization (Admin Access Only)
- Dashboard Analytics (Total Users, New Users)
- Data Visualization using Chart.js
- User Management (View & Delete Users)
- Responsive Admin Interface

---

## Application Screens
- Login Page
- Admin Dashboard
- Analytics Charts
- User Management Table

---

## Project Structure
ADMIN-DASHBOARD-MEAN
│
├── backend
│ ├── routes
│ ├── models
│ ├── middleware
│ ├── server.js
│
├── frontend
│ ├── src
│ │ ├── app
│ │ │ ├── login
│ │ │ ├── admin-dashboard
│ │ │ ├── services
│ │ │ ├── interceptors
│ │ │ └── auth-guard.ts
│
├── README.md

yaml
Copy code

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (Local or MongoDB Atlas)
- Angular CLI

---

### Backend Setup
```bash
cd backend
npm install
node server.js

Backend will run at:
http://localhost:5000

Frontend Setup
bash
Copy code
cd frontend
npm install
ng serve

Frontend will run at:
http://localhost:4200

Login Credentials (Sample)

Email: admin@gmail.com
Password: admin123

Security Implementation

JWT-based authentication
Protected admin routes
Token-based authorization
Role validation for admin access
Real-World Relevance

This application is similar to:

CRM Admin Panels
Analytics Dashboards
Enterprise Admin Management Systems

Conclusion
This project fulfills all the required features mentioned in the assignment,
including authentication, analytics, admin controls, and real-world relevance.
It demonstrates strong understanding of full-stack development using the MEAN stack.

Author
Syamala

