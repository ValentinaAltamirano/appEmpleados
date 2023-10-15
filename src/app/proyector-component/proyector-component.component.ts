import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyector-component',
  templateUrl: './proyector-component.component.html',
  styleUrls: ['./proyector-component.component.css']
})

export class ProyectorComponentComponent implements OnInit {
  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadoService:EmpleadosService){}

  empleados: Empleado[]=[];

  ngOnInit(): void {
    this.empleados= this.empleadoService.empleados
  }

  volverHome(){
    this.router.navigate(['']);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
   // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadoService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']);
    
  }

}
