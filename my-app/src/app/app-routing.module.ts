import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { startScreenComponent } from './components/startScreen/startScreen.component';
import {MenuComponent } from './components/menu/menu.component';
import { PedidosComponent } from "../app/components/pedidos/pedidos.component";



const ROUTES: Routes = [
{ path: 'home', component:startScreenComponent },
{ path: 'menu', component:MenuComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' },
{ path: 'pedidos', component: PedidosComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
