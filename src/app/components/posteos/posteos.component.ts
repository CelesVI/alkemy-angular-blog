import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css']
})
export class PosteosComponent implements OnInit {

  public listaDePosteos:any = []
  searchValue: string = '';
  constructor(private RestService:RestService, private router:Router) { }

  ngOnInit(): void {
    this.cargarDataPosteos();

  }

  routeToPosteoUsuario(id: Number){
    this.router.navigate(['/posteos/'+id+'/usuario'])
  }

  routeToPosteoComentarios(id: Number){
    this.router.navigate(['/posteos/'+id+'/comentarios'])
  }

  public cargarDataPosteos(){
    this.RestService.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(respuesta => {
      this.listaDePosteos = respuesta;
      console.log(respuesta);
    })
  }

}
