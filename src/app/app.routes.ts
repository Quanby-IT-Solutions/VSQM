import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './core/guards/role.guard';
import { AuthlayoutComponent } from './features/auth/authlayout/authlayout.component';
import { AdminLayoutComponent } from './features/desk-attendant/admin/admin-layout/admin-layout.component';
import { CDashboardComponent } from './features/desk-attendant/cashier/cashier-layout/c-dashboard/c-dashboard.component';
import { AccDashboardComponent } from './features/desk-attendant/accounting/accounting-layout/acc-dashboard/acc-dashboard.component';
import { RDashboardComponent } from './features/desk-attendant/registrar/registrar-layout/r-dashboard/r-dashboard.component';
import { ADashboardComponent } from './features/desk-attendant/admin/admin-layout/a-dashboard/a-dashboard.component';
import { RegistrarLayoutComponent } from './features/desk-attendant/registrar/registrar-layout/registrar-layout.component';
import { AccountingLayoutComponent } from './features/desk-attendant/accounting/accounting-layout/accounting-layout.component';
import { CashierLayoutComponent } from './features/desk-attendant/cashier/cashier-layout/cashier-layout.component';
import { KioskLayoutComponent } from './features/kiosk/kiosk-layout/kiosk-layout.component';
import { QueueLayoutComponent } from './features/queue/queue-layout/queue-layout.component';
import { KioskLoginComponent } from './features/kiosk/kiosk-layout/kiosk-login/kiosk-login.component';
import { QDisplayComponent } from './features/queue/queue-layout/q-display/q-display.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthlayoutComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: ['admin'] },
    children: [
      { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ADashboardComponent },
    ],
  },
  {
    path: 'registrar',
    component: RegistrarLayoutComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: ['registrar'] },
    children: [
      { path: '', redirectTo: 'registrar/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: RDashboardComponent },
    ],
  },
  {
    path: 'accounting',
    component: AccountingLayoutComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: ['accounting'] },
    children: [
      { path: '', redirectTo: 'accounting/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AccDashboardComponent },
    ],
  },
  {
    path: 'cashier',
    component: CashierLayoutComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: ['cashier'] },
    children: [
      { path: '', redirectTo: 'cashier/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: CDashboardComponent },
    ],
  },
  {
    path: 'kiosk',
    component: KioskLayoutComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: ['kiosk'] },
    children: [
      { path: '', redirectTo: 'kiosk/login', pathMatch: 'full' },
      { path: 'login', component: KioskLoginComponent },
    ],
  },
  {
    path: 'queue',
    component: QueueLayoutComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: ['queue'] },
    children: [
      { path: '', redirectTo: 'queue/display', pathMatch: 'full' },
      { path: 'display', component: QDisplayComponent },
    ],
  },

  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
