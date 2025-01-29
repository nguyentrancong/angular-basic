import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'detail/:id',
  //   component: DetailComponent,
  // },

  // Lazy loading
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./detail/detail.component').then((c) => c.DetailComponent),
  },
];
