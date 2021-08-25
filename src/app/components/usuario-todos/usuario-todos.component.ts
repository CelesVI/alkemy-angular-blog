import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoUser } from 'src/app/models/todo.model';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-usuario-todos',
  templateUrl: './usuario-todos.component.html',
  styleUrls: ['./usuario-todos.component.css']
})
export class UsuarioTodosComponent implements OnInit {

  public listaDeTodosUsuario: TodoUser[] = []

  constructor(private restService:RestService, private route:ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.restService.getTodosDeUsuario(id)
      .subscribe(todos => this.listaDeTodosUsuario = todos);

  }

  goBack() {
    this.location.back();
  }

}
