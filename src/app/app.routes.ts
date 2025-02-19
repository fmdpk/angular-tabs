import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/material-tab/material-tab.component').then(
        (c) => c.MaterialTabComponent
      ),
  },
  {
    path: 'material-tab',
    loadComponent: () =>
      import('./components/material-tab/material-tab.component').then(
        (c) => c.MaterialTabComponent
      ),
  },
  {
    path: 'primeng-tab',
    loadComponent: () =>
      import('./components/primeng-tab/primeng-tab.component').then(
        (c) => c.PrimengTabComponent
      ),
  },
];
