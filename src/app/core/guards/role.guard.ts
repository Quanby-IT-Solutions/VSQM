import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRole = route.data['expectedRole']; // Role expected by the route
    const userRole = localStorage.getItem('userRole'); // Fetch user role from localStorage

    if (userRole && expectedRole.includes(userRole)) {
      return true; // Allow access if the role matches
    } else {
      // Redirect to login if roles don't match
      this.router.navigate(['/login']);
      return false;
    }
  }
}
