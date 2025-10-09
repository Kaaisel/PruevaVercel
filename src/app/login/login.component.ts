import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { environment } from '../environment/environment';
import { AuthService } from '../auth/services/auth.services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario = '';
  contrasena = '';

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  iniciarSesion() {
    if (this.usuario.trim() !== "" && this.contrasena.trim() !== "") {

      this.authService.login(this.usuario.trim(), this.contrasena.trim())
        .subscribe({
          next: user => {
            this.authService._auth = user; // Guardar usuario en el servicio
            localStorage.setItem('token', '1'); // Simulación de token

           
            this.router.navigate(['./usuarios/usuario']);
       
          },
          error: err => {
            console.error('Error en el login:', err.message);
            alert('Error en la autenticación: ' + err.message);
          
          }
        });
    } else {
      console.log('Usuario o contraseña incorrectos');
    }
  }
}