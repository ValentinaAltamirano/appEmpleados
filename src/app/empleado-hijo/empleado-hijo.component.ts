import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {
  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  arrayCaracterisitcas = [''];

  agregarCarcterisitca(nuevaCaracterisitca: string){
    this.arrayCaracterisitcas.push(nuevaCaracterisitca)
  }
}
