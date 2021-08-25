import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostUser } from './models/post.model';
import { AlbumUser } from './models/album.model';
import { TodoUser } from './models/todo.model';
import { UserPost } from './models/user.model';
import { CommentPost } from './models/comments.model';
import { PhotoAlbum } from './models/photo.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }

  getPosteosDeUsuario(id: number){
    return this.http.get<PostUser[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  }

  getAlbumesDeUsuario(id: number){
    return this.http.get<AlbumUser[]>(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
  }

  getTodosDeUsuario(id: number){
    return this.http.get<TodoUser[]>(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
  }

  getUsuarioDePosteo(id: number){
    return this.http.get<UserPost>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  getComentariosDePosteo(id: number){
    return this.http.get<CommentPost[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }

  getFotosDeAlbum(id: number){
    return this.http.get<PhotoAlbum[]>(`https://jsonplaceholder.typicode.com/album/${id}/photos`)
  }

  getUsuarioDeAlbum(id: number){
    return this.http.get<UserPost>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  deleteFoto(foto: PhotoAlbum): Observable<{}> {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    return this.http.delete(url);

  }

  getTodoById(id: number){
    return this.http.get<TodoUser>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  updateTodo(id: number, todo: TodoUser) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    console.log(todo);
    return this.http.put(url, todo);

  }

}
