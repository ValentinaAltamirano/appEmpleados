import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  title = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadoService:EmpleadosService){}

  ngOnInit(): void {
    // this.empleados= this.empleadoService.empleados
    this.empleadoService.getEmpleados().subscribe(misEmpleados => {
      this.empleados = Object.values(misEmpleados);

      this.empleadoService.setEmpelados(this.empleados);
    })

  }

  empleados: Empleado[]=[];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
   // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadoService.agregarEmpleadoServicio(miEmpleado);
  }
}
