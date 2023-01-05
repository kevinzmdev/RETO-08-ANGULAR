import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
      usuario = "Angular";
      password = "123456";
      paginas = ["Home", "Support", "Contact"]
      resultado = false;
      mensaje="";

      Validar(user:string){
      if(user == this.usuario){
      this.resultado = true;
      this.mensaje ="Bienvenido usuario: " + this.usuario;
      }else{
      this.resultado = false;
      this.mensaje ="Credenciales Incorrectas. Por favor, inténtalo nuevamente."
    }
  }
}


