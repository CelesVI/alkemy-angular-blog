import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostUser } from 'src/app/models/post.model';

@Component({
  selector: 'app-usuario-posts',
  templateUrl: './usuario-posts.component.html',
  styleUrls: ['./usuario-posts.component.css']
})
export class UsuarioPostsComponent implements OnInit {

  public listaDePosteosUsuario: PostUser[] = []

  constructor(private restService:RestService, private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.restService.getPosteosDeUsuario(id)
      .subscribe(posts => this.listaDePosteosUsuario = posts);

  }

  goBack() {
    this.location.back();
  }


}
