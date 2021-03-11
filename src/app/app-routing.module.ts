import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detailnote',
    loadChildren: () => import('./detailnote/detailnote.module').then( m => m.DetailnotePageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'addnote',
    loadChildren: () => import('./addnote/addnote.module').then( m => m.AddnotePageModule)
  },
  {
    path: 'listnotes',
    loadChildren: () => import('./listnotes/listnotes.module').then( m => m.ListnotesPageModule)
  },
  {
    path: 'detailnote/:nomor',
    loadChildren: () => import('./detailnote/detailnote.module').then( m => m.DetailnotePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
