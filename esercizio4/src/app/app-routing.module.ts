import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModificaComponent } from './pages/modifica/modifica.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'modifica/:id',
    component:ModificaComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
