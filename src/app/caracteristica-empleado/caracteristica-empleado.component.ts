import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristica-empleado',
  templateUrl: './caracteristica-empleado.component.html',
  styleUrls: ['./caracteristica-empleado.component.css']
})
export class CaracteristicaEmpleadoComponent {

  constructor(private miServicio:ServicioEmpleadosService){}

  @Output() caracteristicaEmpleado = new EventEmitter<string>();

  agregarCarcterisitca(value: string){
    this.miServicio.muestraMensaje(value)
    this.caracteristicaEmpleado.emit(value);
  }
}
