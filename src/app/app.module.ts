import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioPostsComponent } from './components/usuario-posts/usuario-posts.component';
import { PosteosComponent } from './components/posteos/posteos.component';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { UsuarioAlbumesComponent } from './components/usuario-albumes/usuario-albumes.component';
import { UsuarioTodosComponent } from './components/usuario-todos/usuario-todos.component';
import { PosteoDetalleComponent } from './components/posteo-detalle/posteo-detalle.component';
import { PosteoUsuarioComponent } from './components/posteo-usuario/posteo-usuario.component';
import { PosteoComentariosComponent } from './components/posteo-comentarios/posteo-comentarios.component';
import { AlbumesFotosComponent } from './components/albumes-fotos/albumes-fotos.component';
import { TodosComponent } from './components/todos/todos.component';
import { AlbumUsuarioComponent } from './components/album-usuario/album-usuario.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SearchfiltertodoPipe } from './searchfiltertodo.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { TodoActualizarComponent } from './components/todo-actualizar/todo-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuarioComponent,
    UsuariosComponent,
    UsuarioPostsComponent,
    PosteosComponent,
    AlbumesComponent,
    UsuarioAlbumesComponent,
    UsuarioTodosComponent,
    PosteoDetalleComponent,
    PosteoUsuarioComponent,
    PosteoComentariosComponent,
    AlbumesFotosComponent,
    TodosComponent,
    AlbumUsuarioComponent,
    SearchBarComponent,
    SearchfilterPipe,
    SearchfiltertodoPipe,
    FooterComponent,
    TodoActualizarComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
