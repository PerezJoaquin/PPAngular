import { Component } from '@angular/core';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService]
})
export class AppComponent {
  title = 'app works!';
  personas:Array<any> = [];
  most = false;
  alta = {};
  F='pink';
  servi;
  

  constructor(private serv:PersonasService){
    serv.traerPersonas()
    .then(data =>{
      this.personas = data;
      this.servi = serv;
      console.log("carga personas");
      console.log("success", data);
    }).catch(err =>{
      console.log("error", err);
    });
  }

  mostrar(){
    if(this.most){this.most = false;}
    else{this.most = true;}
  }

  Agregar(param){
    this.servi.agregarPersona(param)
    .then(data =>{
      console.log("guardar persona");
      console.log("success", data);
    }).catch(err =>{
      console.log("error", err);
    });
  }

  borrar(indice){
    this.servi.borrarPersona(this.personas[indice].id)
    .then(data =>{
      console.log("borrar persona");
      console.log("success", data);
    }).catch(err =>{
      console.log("error", err);
    });
    console.log(this.personas[indice].id);
  }
}
