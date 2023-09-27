import { Component } from '@angular/core';
import { AlumnosComponent } from '../alumnos/alumnos.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  tittle ="Listado de alumnos curso Angular";

  Alumno1 = new AlumnosComponent('Juan', 'Perez','Chile',25,);
  Alumno2 = new AlumnosComponent('Roberto', 'Manfinfla','Argentina',13);
  Alumno3 = new AlumnosComponent('Jorge', 'Toro','Colombia',25);
  Alumno4 = new AlumnosComponent('Alicia','Wonderland','Chile',25);
  Alumno5 = new AlumnosComponent('Javiera', 'Carrera','Brasil',25);

  alumnos = [this.Alumno1,this.Alumno2,this.Alumno3,this.Alumno4,this.Alumno5 ]
}
