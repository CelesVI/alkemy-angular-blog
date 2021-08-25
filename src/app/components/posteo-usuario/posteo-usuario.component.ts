import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPost } from '../../models/user.model';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-posteo-usuario',
  templateUrl: './posteo-usuario.component.html',
  styleUrls: ['./posteo-usuario.component.css']
})
export class PosteoUsuarioComponent implements OnInit {

  public usuarioPosteo: UserPost = {}
  
  constructor(private restService:RestService, private route:ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    const print = this.restService.getUsuarioDePosteo(id)
      .subscribe(post => this.usuarioPosteo = post);

    console.log(print);
  }

  goBack(){
    this.location.back();
  }

  

}


