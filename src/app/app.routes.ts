import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent) },
  { path: 'signup', loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent), data: { mode: 'signup' } },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'funnels', loadComponent: () => import('./pages/funnels/funnels.component').then(m => m.FunnelsComponent) },
      { path: 'contacts', loadComponent: () => import('./pages/contacts/contacts.component').then(m => m.ContactsComponent) },
      { path: 'chat', loadComponent: () => import('./pages/chat/chat.component').then(m => m.ChatComponent) },
      { path: 'charts', loadComponent: () => import('./pages/charts/charts.component').then(m => m.ChartsComponent) },
      { path: 'charts/area', loadComponent: () => import('./pages/charts/area-chart/area-chart.component').then(m => m.AreaChartComponent) },
      { path: 'charts/bar', loadComponent: () => import('./pages/charts/bar-chart/bar-chart.component').then(m => m.BarChartComponent) },
      { path: 'charts/line', loadComponent: () => import('./pages/charts/line-chart/line-chart.component').then(m => m.LineChartComponent) },
      { path: 'charts/pie', loadComponent: () => import('./pages/charts/pie-chart/pie-chart.component').then(m => m.PieChartComponent) },
      { path: 'tables', loadComponent: () => import('./pages/tables/tables.component').then(m => m.TablesComponent) },
      { path: 'cards', loadComponent: () => import('./pages/cards/cards.component').then(m => m.CardsComponent) },
      { path: 'forms', loadComponent: () => import('./pages/forms/forms.component').then(m => m.FormsComponent) },
      { path: 'modais', loadComponent: () => import('./pages/modais/modais').then(m => m.Modais) },
    ]
  }
];
