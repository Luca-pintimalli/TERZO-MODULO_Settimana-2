import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Page2Component } from './pages/page2/page2.component';
import { ModificaComponent } from './pages/modifica/modifica.component';
import { AddSmartphoneComponent } from './pages/add-smartphone/add-smartphone.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'page2',
    component:Page2Component
  },
  {
    path:'modifica/:id',
    component:ModificaComponent
  },
  {
    path:'add-smartphone',
    component:AddSmartphoneComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
