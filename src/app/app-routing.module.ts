import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { PosteosComponent } from './components/posteos/posteos.component';
import { UsuarioPostsComponent } from './components/usuario-posts/usuario-posts.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioAlbumesComponent } from './components/usuario-albumes/usuario-albumes.component';
import { UsuarioTodosComponent } from './components/usuario-todos/usuario-todos.component';
import { PosteoUsuarioComponent } from './components/posteo-usuario/posteo-usuario.component';
import { PosteoComentariosComponent } from './components/posteo-comentarios/posteo-comentarios.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoActualizarComponent } from './components/todo-actualizar/todo-actualizar.component';
import { AlbumesFotosComponent } from './components/albumes-fotos/albumes-fotos.component';
import { AlbumUsuarioComponent } from './components/album-usuario/album-usuario.component';


const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent}, 
  {path: 'usuarios/:id/posteos', component: UsuarioPostsComponent},
  {path: 'usuarios/:id/albumes', component: UsuarioAlbumesComponent},
  {path: 'usuarios/:id/todos', component: UsuarioTodosComponent},
  {path: 'posteos/:id/usuario', component: PosteoUsuarioComponent},
  {path: 'posteos/:id/comentarios', component: PosteoComentariosComponent},
  {path: 'posteos', component: PosteosComponent},
  {path: 'albumes', component: AlbumesComponent},
  {path: 'albumes/:id/fotos', component: AlbumesFotosComponent},
  {path: 'albumes/:id/usuario', component: AlbumUsuarioComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'todos/:id/actualizar', component: TodoActualizarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
