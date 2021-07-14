import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlayerFormComponent } from "./player-form.component";


const routes: Routes = [
    {path: '', component: PlayerFormComponent},
    {path: ':id', component: PlayerFormComponent},
 
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PlayerFormRoutingModule{}