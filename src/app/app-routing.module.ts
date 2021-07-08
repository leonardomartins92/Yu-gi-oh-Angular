import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsDetailsComponent } from './components/cards-details/cards-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cards/:cardId', component: CardsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
