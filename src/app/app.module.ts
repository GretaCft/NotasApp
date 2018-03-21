import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListallnotesComponent } from './listallnotes/listallnotes.component';
import { SearchnotesComponent } from './searchnotes/searchnotes.component';
import { ListfavnotesComponent } from './listfavnotes/listfavnotes.component';
import { NoteComponent } from './note/note.component';
import { FavoriteiconComponent } from './note/favoriteicon/favoriteicon.component';
import { CreateformComponent } from './createnotes/createform/createform.component';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListallnotesComponent,
    SearchnotesComponent,
    ListfavnotesComponent,
    NoteComponent,
    FavoriteiconComponent,
    CreateformComponent,
    InicioComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
