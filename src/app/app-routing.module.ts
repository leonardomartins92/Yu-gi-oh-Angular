import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  
  {
    path: '', 
    loadChildren: () => import('./pages/home/home.module').then(m=>m.HomeModule)
  },

  {
    path: 'cards', 
    loadChildren: () => import('./pages/cards/cards.module').then(m=>m.CardsModule)
  },

  {
    path: 'players', 
    loadChildren: () => import('./pages/players/players.module').then(m=>m.PlayersModule)
  },
  {
    path: 'games', 
    loadChildren: () => import('./pages/games/games.module').then(m=>m.GamesModule)
  },

  {
    path: 'register', 
    loadChildren: () => import('./pages/player-form/player-form.module').then(m=>m.PlayerFormModule)
  },

  {
    path: 'authenticated', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/authenticated/authenticated.module').then(m=>m.AuthenticatedModule)
  },

  {
    path: 'unauthorized', 
    loadChildren: () => import('./pages/unauthorized/unauthorized.module').then(m=>m.UnauthorizedModule)
  },
     
  { path: '**',
  loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m=>m.PageNotFoundModule)
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
