import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { AlbumUser } from 'src/app/models/album.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario-albumes',
  templateUrl: './usuario-albumes.component.html',
  styleUrls: ['./usuario-albumes.component.css']
})
export class UsuarioAlbumesComponent implements OnInit {

  public listaDeAlbumesUsuario: AlbumUser[] = []

  constructor(private restService:RestService, private route:ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.restService.getAlbumesDeUsuario(id)
      .subscribe(albums => this.listaDeAlbumesUsuario = albums);

  }

  goBack(){
    this.location.back();
  }

}
