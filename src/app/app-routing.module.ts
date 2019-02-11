import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { RouteAComponent } from './route-a/route-a.component';
import { RouteBComponent } from './route-b/route-b.component';
import { RouteCComponent } from './route-c/route-c.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RouteAComponent
  },
  {
    path: '',
    children: [
      {
        path: 'route-b',
        component: RouteBComponent
      },
      {
        path: 'route-c',
        component: RouteCComponent
      }
    ]
  }
];

const routingOptions: ExtraOptions = {
  useHash: true
};

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, routingOptions);
