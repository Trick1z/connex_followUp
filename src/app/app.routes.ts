import { Routes } from '@angular/router';
import { LoginComponent } from './views/pages/login/login.component';
import { WordScoreComponent } from './views/games/word-score/word-score.component';

export const routes: Routes = [


  { path: 'login', component: LoginComponent },
  // { path: 'register', component: LoginComponent },









  { path: 'games/word', component: WordScoreComponent },



  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }


  // {
  //   path: 'games',
  //   loadChildren: () =>
  //     import('./games/games.module').then((m) => m.GamesModule)
  // },
  // {
  //   path: 'views',
  //   loadChildren: () =>
  //     import('./views/views.module').then((m) => m.ViewsModule)
  // },
  // { path: '', redirectTo: 'views/login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'views/login' }




];
