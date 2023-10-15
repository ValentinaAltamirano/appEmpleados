import { Component  } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Listado de Empleados';

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD_OTUkRC8GtYHWzPgpKOe8dTtZHG18tUw",
      authDomain: "clientes-f53f1.firebaseapp.com",
    })
  }

 login(){
  return this.loginService.getIdToken();
 }


  logout(){
    this.loginService.logout()
  }
  

}
