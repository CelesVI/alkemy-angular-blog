import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoUser } from 'src/app/models/todo.model';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public listaDeTodos:any = []
  searchValue:string = '';


  constructor(private RestService:RestService, private router:Router){

  
  }

  ngOnInit(): void{
    this.cargarDataTodos();
  }

  /*routeToAlbumFotos(id: Number){
    this.router.navigate(['/todos/'+id+'/actualizar'])
  }*/

  routeToActualizarTodo(id: Number){
    this.router.navigate(['/todos/'+id+'/actualizar'])
  }

  /*routeToUsuarioPosteos(id: Number){
    this.router.navigate(['/usuarios/'+id+'/posteos'])
  }*/

  public cargarDataTodos(){
    this.RestService.get('https://jsonplaceholder.typicode.com/todos')
    .subscribe(respuesta => {
      this.listaDeTodos = respuesta;
      console.log(respuesta);
    })
  }

 
}
