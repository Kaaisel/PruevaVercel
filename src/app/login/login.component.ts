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
  usuario: string = '';
  contrasena: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Si el usuario vuelve al login, limpiamos todo
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.logout(this.router);
    }
  }

  iniciarSesion() {
    if (this.usuario.trim() && this.contrasena.trim()) {
      this.authService.login(this.usuario.trim(), this.contrasena.trim())
        .subscribe({
          next: () => this.router.navigate(['./usuario']),
          error: err => {
            console.error('Error en el login:', err);
            alert('Error en la autenticación: ' + err.message);
          }
        });
    } else {
      console.log('Usuario o contraseña incorrectos');
    }
  }
}