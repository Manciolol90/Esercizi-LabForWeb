import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/dashboard/dashboard').then((m) => m.Dashboard),

    children: [
      {
        path: 'album-list',
        loadComponent: () => import('./components/album-list/album-list').then((m) => m.AlbumList),
      },
      {
        path: 'inserisci-album',
        loadComponent: () =>
          import('./components/inserisci-album/inserisci-album').then((m) => m.InserisciAlbum),
      },
      // {
      //   path: 'elimina-album',
      //   // component: EliminaAlbum,
      // },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
