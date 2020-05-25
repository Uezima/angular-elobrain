import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing/landing-layout.component';
import { LandingRoutingModule } from './pages/landing/landing-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard/dashboard-layout.component';
import { DashboardRoutingModule } from './pages/dashboard/dashboard-routing.module';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', loadChildren: () => LandingRoutingModule }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', loadChildren: () => DashboardRoutingModule }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
