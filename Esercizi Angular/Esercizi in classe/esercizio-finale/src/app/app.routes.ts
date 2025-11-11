import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/user-list/user-list').then((c) => c.UserList), //caricamento pigro ossia viene caricato solo quando viene clickato. significa che quando viene caricata la rotta vuota, viene importato e caricato il modulo UserList, presente in components/user-list/user-list
  },
  {
    path: '**',
    redirectTo: '', //se viene inserita una rotta non definita, viene reindirizzato alla rotta vuota
  },
];
