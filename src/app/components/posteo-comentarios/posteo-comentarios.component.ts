import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentPost } from 'src/app/models/comments.model';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-posteo-comentarios',
  templateUrl: './posteo-comentarios.component.html',
  styleUrls: ['./posteo-comentarios.component.css']
})
export class PosteoComentariosComponent implements OnInit {

  public comentarioPosteo: CommentPost[] = []
  
  constructor(private restService:RestService, private route:ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    const print = this.restService.getComentariosDePosteo(id)
      .subscribe(comentarios => this.comentarioPosteo = comentarios);

    console.log(print);
  }

  goBack(){
    this.location.back();
  }
}
