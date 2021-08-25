import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoUser } from 'src/app/models/todo.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-todo-actualizar',
  templateUrl: './todo-actualizar.component.html',
  styleUrls: ['./todo-actualizar.component.css']
})


export class TodoActualizarComponent implements OnInit {

  constructor(private restService: RestService, private router: ActivatedRoute, private location: Location) { }

  editarTodo = new FormGroup( {
    id: new FormControl(''),
    title: new FormControl(''),
    completed: new FormControl(''),
  });

  

  ngOnInit(){
    console.log(this.router.snapshot.params.id);
    this.restService.getTodoById(this.router.snapshot.params.id).subscribe((resultado) =>{
      console.log(resultado);
      this.editarTodo = new FormGroup( {
        id: new FormControl(resultado['id']),
        title: new FormControl(resultado['title']),
        completed: new FormControl(resultado['completed']),
      });
    })
  }

  guardarTodo(){
   console.log(this.editarTodo.value);
   this.restService.updateTodo(Number(this.router.snapshot.params.id), this.editarTodo.value)
    .subscribe((resultado => {
      console.log(resultado);
    }))
  };

  goBack(){
    this.location.back();
  }

}
