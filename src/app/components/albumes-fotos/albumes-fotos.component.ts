import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoAlbum } from 'src/app/models/photo.model';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-albumes-fotos',
  templateUrl: './albumes-fotos.component.html',
  styleUrls: ['./albumes-fotos.component.css']
})
export class AlbumesFotosComponent implements OnInit {

  public fotosAlbum: PhotoAlbum[] = []
  
  constructor(private restService:RestService, private route:ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    const print = this.restService.getFotosDeAlbum(id)
      .subscribe(fotos => this.fotosAlbum = fotos);

  }

  goBack(){
    this.location.back();
  }

  deleteFoto(foto: PhotoAlbum): void {
    this.fotosAlbum = this.fotosAlbum.filter((a: PhotoAlbum) => a !== foto);
    this.restService.deleteFoto(foto).subscribe();
  }

  /*public cargarDataFotos(){
    this.restService.get('https://jsonplaceholder.typicode.com/photos')
    .subscribe(respuesta => {
      this.listaDeAlbumes = respuesta;
      console.log(respuesta);
    })
  }*/

}
