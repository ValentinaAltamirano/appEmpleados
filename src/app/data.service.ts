import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login.service";

@Injectable()
export class DataService{

    constructor(private httpClient: HttpClient, private loginService:LoginService) {}

    getEmpleados(){
        const token = this.loginService.getIdToken();

        return this.httpClient.get('https://clientes-f53f1-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://clientes-f53f1-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response=>console.log("Se han guardado los emplados: " + response),
            error=> console.log("Error" + error),
        );

    }

    actualizarEmpleado(indice:number,empleado:Empleado){
        let url = 'https://clientes-f53f1-default-rtdb.firebaseio.com/datos/' + indice + '.json';
        this.httpClient.put(url, empleado).subscribe(
            response=>console.log("Se ha modificado el empleado: " + response),
            error=> console.log("Error: " + error)
        );
    }

    eliminarEmpleado(indice: number){
        let url = 'https://clientes-f53f1-default-rtdb.firebaseio.com/datos/' + indice + '.json';
        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha eliminado el empleado: " + response),
            error=> console.log("Error: " + error)
        );
    }
}