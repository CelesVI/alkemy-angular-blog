import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPost } from 'src/app/models/user.model';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-album-usuario',
  templateUrl: './album-usuario.component.html',
  styleUrls: ['./album-usuario.component.css']
})
export class AlbumUsuarioComponent implements OnInit {

  public usuarioAlbum: UserPost = {}
  
  constructor(private restService:RestService, private route:ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    const print = this.restService.getUsuarioDeAlbum(id)
      .subscribe(usuario => this.usuarioAlbum = usuario);

  }

  goBack(){
    this.location.back();
  }

}
