import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {

  constructor(public nombre: String, public apellido: String,   public pais: String,  public edad: Number){ 

  }

}
