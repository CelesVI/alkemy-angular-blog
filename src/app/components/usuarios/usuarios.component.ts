import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  

  @Input() dataEntrante:any

  @Output() rest: EventEmitter<any> = new EventEmitter();

  public listaDeUsuarios:any = []

  public listaDePosteosUsuario:any = [];

  public listaDeAlbumesUsuario:any = [];


  constructor(private RestService:RestService, private router:Router){

  
  }

  ngOnInit(): void{
    this.cargarDataUsuarios();
  }

  getUsuarioId(id:number){
    return id;
  }

  routeToUsuarioPosteos(id: Number){
    this.router.navigate(['/usuarios/'+id+'/posteos'])
  }

  routeToUsuarioAlbumes(id: Number){
    this.router.navigate(['/usuarios/'+id+'/albumes'])
  }

  routeToUsuarioTodos(id: Number){
    this.router.navigate(['/usuarios/'+id+'/todos'])
  }

  public cargarDataUsuarios(){
    this.RestService.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(respuesta => {
      this.listaDeUsuarios = respuesta;
      console.log(respuesta);
    })
  }

}
