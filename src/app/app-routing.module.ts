import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { BuscaComponent } from './busca/busca.component';

/* const routes: Routes = [
  { path: '/home', component : HomeComponent },
  { path: '/search', component: BuscaComponent } 
] */

@NgModule({
  declarations: [],
  //imports: [/* CommonModule */ RouterModule.forRoot(routes) ],
  //exports: [RouterModule]
})
export class AppRoutingModule { }
