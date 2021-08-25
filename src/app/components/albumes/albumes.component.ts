import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router } from '@angular/router';
import { AlbumUser } from 'src/app/models/album.model';
import { PhotoAlbum } from 'src/app/models/photo.model';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {

  public listaDeAlbumes:any = []
  public listaDeFotos:any = []

  constructor(private RestService:RestService, private router:Router) { }

  ngOnInit(): void {
    this.cargarDataAlbumes();

  }

  routeToAlbumFotos(id: Number){
    this.router.navigate(['/albumes/'+id+'/fotos'])
  }

  routeToAlbumUsuario(id: Number){
    this.router.navigate(['/albumes/'+id+'/usuario'])
  }

  deleteFoto(foto: PhotoAlbum): void {
    this.listaDeFotos = this.listaDeFotos.filter((a: PhotoAlbum) => a !== foto);
    this.RestService.deleteFoto(foto).subscribe();
  }

  public cargarDataAlbumes(){
    this.RestService.get('https://jsonplaceholder.typicode.com/albums')
    .subscribe(respuesta => {
      this.listaDeAlbumes = respuesta;
      console.log(respuesta);
    })
  }

  public cargarDataFotos(){
    this.RestService.get('https://jsonplaceholder.typicode.com/photos')
    .subscribe(respuesta => {
      this.listaDeAlbumes = respuesta;
      console.log(respuesta);
    })
  }
}
