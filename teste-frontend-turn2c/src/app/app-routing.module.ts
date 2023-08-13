import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
