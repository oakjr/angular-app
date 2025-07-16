import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { authGuard } from './core/auth-guard';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' },
];
