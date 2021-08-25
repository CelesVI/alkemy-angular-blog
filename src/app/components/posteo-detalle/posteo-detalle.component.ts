import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPost } from 'src/app/models/user.model';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-posteo-detalle',
  templateUrl: './posteo-detalle.component.html',
  styleUrls: ['./posteo-detalle.component.css']
})
export class PosteoDetalleComponent implements OnInit {

  public usuarioPosteo: UserPost = {}

  constructor(private restService:RestService, private route:ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.restService.getUsuarioDePosteo(id)
      .subscribe(post => this.usuarioPosteo = post);

  }

  goBack(){
    this.location.back();
  }



}
