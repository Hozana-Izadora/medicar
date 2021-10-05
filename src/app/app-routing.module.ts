import { NovaContaComponent } from './pages/contas/nova-conta/nova-conta.component';
import { ConsultaCreateComponent } from './pages/consultas/consulta-create/consulta-create.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'consultas',
    component: ConsultasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'consulta/add',
    component: ConsultaCreateComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'consultas',
  //   component: ConsultaCreateComponent
  // },
  {
    path: 'conta/add',
    component: NovaContaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
