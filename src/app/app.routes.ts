import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';

const MentalStateExamsComponent = () => import('./hartford/pages/mental-state-exams/mental-state-exams.component').then(m => m.MentalStateExamsComponent);
export const routes: Routes = [
  { path: 'home',             component:      HomeComponent },
  { path: '',                 redirectTo:     'home', pathMatch: 'full' },
  { path: 'mental-state-exams', loadComponent: MentalStateExamsComponent},
  { path: '' , redirectTo: '/home', pathMatch: 'full'},
];
