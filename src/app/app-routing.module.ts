import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path:'', redirectTo: 'login', pathMatch: 'full'},

  {path:'login', component: LoginComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'inicio', component: InicioComponent},
  {path:'tema', component: TemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
