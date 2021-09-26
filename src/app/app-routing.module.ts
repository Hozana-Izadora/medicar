import { ConsultaCreateComponent } from './pages/consultas/consulta-create/consulta-create.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'consultas',
    component: ConsultasComponent
  },
  {
    path: 'consulta/add',
    component: ConsultaCreateComponent
  },
  {
    path: 'consultas',
    component: ConsultaCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
