import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 usuario = '';
  contrasena = '';

  constructor(private router: Router, private http: HttpClient) { }

  iniciarSesion() {
    // Llamada POST al backend
    this.http.post<any>(`${environment.apiUrl}/login`, {
      nombre: this.usuario,
      cont: Number(this.contrasena)
    }).subscribe({
      next: (res) => {
        if (res.t_usuario === 'dungeonMaster') {
          this.router.navigate(['dm']);
        } else {
          this.router.navigate(['usuario']);
        }
      },
      error: (err) => {
        alert(err.error?.error || 'Usuario o contraseña incorrectos');
      }
    });
  }
  
}