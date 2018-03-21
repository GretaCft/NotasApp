import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListallnotesComponent } from './listallnotes/listallnotes.component';
import { SearchnotesComponent } from './searchnotes/searchnotes.component';
import { ListfavnotesComponent } from './listfavnotes/listfavnotes.component';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { CreateformComponent } from './createnotes/createform/createform.component';

const routes: Routes = [
  {
    'path' : '',
    component :  InicioComponent
  },
  {
    'path' : 'about',
    component :  AboutComponent
  },
  {
    'path' : 'crear',
    component : CreateformComponent
  },
  {
    'path' : 'listarNotas',
    component :  ListallnotesComponent
  },
  {
    'path' : 'buscarNota/:titulo',
    component :  SearchnotesComponent
  },
  {
    'path' : 'listarNotasFav',
    component :  ListfavnotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
