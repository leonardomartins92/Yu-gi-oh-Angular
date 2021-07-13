import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
     
  { path: '**',
  loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m=>m.PageNotFoundModule)
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
