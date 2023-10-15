import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentana: ServicioEmpleadosService, private dataService:DataService) { }

  getEmpleados(){
    return this.dataService.getEmpleados();
  }

  setEmpelados(misEmpleados:Empleado[]){
    this.empleados = misEmpleados;
  }

  empleados: Empleado[]=[];

  // empleados: Empleado[]=[
  //   new Empleado("Valentina", "Altamirano","Presidente",7500),
  //   new Empleado("Ana", "Martini","Directora",6500),
  //   new Empleado("Maria", "Fernandez","Jefa Direccion",4500),
  //   new Empleado("Laura", "Lopez","Administrativo",3200)
  // ];

  agregarEmpleadoServicio(miEmpleado:Empleado){
    this.servicioVentana.muestraMensaje("Persona que se va a agregar: " + "\n" + miEmpleado.nombre + "\n" + "Salario: " + miEmpleado.salario)
    this.empleados.push(miEmpleado);

    this.dataService.guardarEmpleados(this.empleados);
  }

  
  getEmpleado(indice:number){
    let empleado:Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    this.empleados[indice] = empleado;
    this.dataService.actualizarEmpleado(indice, empleado);
  }

  eliminarEmpleado(indice: number){
    this.empleados.splice(indice,1);
    this.dataService.eliminarEmpleado(indice);

    if(this.empleados!=null){
      this.dataService.guardarEmpleados(this.empleados);
    }
  }

}
