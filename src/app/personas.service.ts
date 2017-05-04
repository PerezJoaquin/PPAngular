import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class PersonasService {

  constructor(private http:Http) { }

  traerPersonas(){
    return this.http.get('http://localhost:8080/primerparciallab4/index.php/personas')
    .toPromise()
    .then(this.extraer)
    .catch(this.error);
  }

  private extraer(res:Response){
    return res.json() || {};
  }
  private error(res:Response){
    return res;
  }

  agregarPersona(personaG){
    return this.http.get('http://localhost:8080/primerparciallab4/index.php/persona/guardar?nombre='+personaG.nombre+'&apellido='+personaG.apellido+'&dni='+personaG.dni+'&foto='+personaG.foto+'&sexo='+personaG.sexo+'&password='+personaG.password)
    .toPromise()
    .then(this.extraer)
    .catch(this.error);
  }

  borrarPersona(id){
    return this.http.get('http://localhost:8080/primerparciallab4/index.php/persona/borrar?id='+id)
    .toPromise()
    .then(this.extraer)
    .catch(this.error);
  }  

}
