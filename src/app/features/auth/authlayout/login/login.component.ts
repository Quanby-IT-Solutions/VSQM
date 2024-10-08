import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  email = signal('');
  password = signal('');

  private router = inject(Router);

  // Dummy user data for testing purposes
  users = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'registrar@example.com', password: 'registrar123', role: 'registrar' },
    { email: 'accounting@example.com', password: 'accounting123', role: 'accounting' },
    { email: 'cashier@example.com', password: 'cashier123', role: 'cashier' },
  ];

  login(): void {
    const user = this.users.find(
      u => u.email === this.email() && u.password === this.password()
    );

    if (user) {
      // Save the user role in localStorage
      localStorage.setItem('userRole', user.role);

      // Redirect to the appropriate dashboard based on the role
      switch (user.role) {
        case 'admin':
          this.router.navigate(['/admin']);
          break;
        case 'registrar':
          this.router.navigate(['/registrar']);
          break;
        case 'accounting':
          this.router.navigate(['/accounting']);
          break;
        case 'cashier':
          this.router.navigate(['/cashier']);
          break;
        default:
          this.router.navigate(['/login']);
      }
    } else {
      alert('Invalid email or password');
    }
  }

  // Predefined account login method for testing purposes
  loginWithPredefinedAccount(role: string): void {
    localStorage.setItem('userRole', role);

    switch (role) {
      case 'admin':
        this.router.navigate(['/admin']);
        break;
      case 'registrar':
        this.router.navigate(['/registrar']);
        break;
      case 'accounting':
        this.router.navigate(['/accounting']);
        break;
      case 'cashier':
        this.router.navigate(['/cashier']);
        break;
      case 'kiosk':  // For kiosk role
        this.router.navigate(['/kiosk']);
        break;
      case 'queue':  // For queue role
        this.router.navigate(['/queue']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }

  // Method for navigating to kiosk
  navigateToKiosk(): void {
    localStorage.setItem('userRole', 'kiosk');  // Set correct role for kiosk
    this.router.navigate(['/kiosk']);
  }

  // Method for navigating to queue
  navigateToQueue(): void {
    localStorage.setItem('userRole', 'queue');  // Set correct role for queue
    this.router.navigate(['/queue']);
  }
}
