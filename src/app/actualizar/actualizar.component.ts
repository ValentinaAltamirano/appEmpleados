import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadoService:EmpleadosService, private route:ActivatedRoute){}

  empleados: Empleado[]=[];

  ngOnInit(): void {
    this.empleados= this.empleadoService.empleados;
    
    this.indice = this.route.snapshot.params['id'];

    let empleado: Empleado= this.empleadoService.getEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;

    this.acc = parseInt(this.route.snapshot.queryParams['accion']);
  }

  volverHome(){
    this.router.navigate(['']);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice: number;
  acc:number;

  actualizarEmpleado(){

    if(this.acc == 1){
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
      this.empleadoService.actualizarEmpleado(this.indice, miEmpleado);
      this.router.navigate(['']);
    } else{
      this.empleadoService.eliminarEmpleado(this.indice);
      this.router.navigate(['']);
    }
    

    
  }

  eliminarEmpleado(){
  }

  
}
