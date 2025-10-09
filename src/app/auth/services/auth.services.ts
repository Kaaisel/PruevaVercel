import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Auth } from '../interface/auth';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LoginRespuesta } from '../../interface/login-respuesta';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient) {
		const usuarioGuardado = localStorage.getItem('usuario');
		if (usuarioGuardado) {
			this._auth = JSON.parse(usuarioGuardado); // Recupera y parsea los datos
		}
	}

	private baseUrl: string = environment.apiUrl;
	public _auth!: Auth; // Solo un objeto Auth en vez de array
	public verifica: boolean = false;

	login(username: string, password: string): Observable<Auth> {
		return this.http.post<LoginRespuesta>(this.baseUrl + 'login', { username, password })
			.pipe(
				map(response => {
					if (response.success) {
						this._auth = response.user!;  // Guarda el usuario en _auth
						localStorage.setItem('usuario', JSON.stringify(this._auth)); // Guarda en localStorage
						return response.user as Auth;
					} else {
						throw new Error(response.message || 'Error en la autenticación');
					}
				}),
				catchError(err => {
					console.error('Error en el login:', err);
					return throwError(err);
				})
			);
	}

	verificaAutenticacion() {
		this.verifica = false;
		const miId = this._auth.id;

		// Verificamos si existe el usuario en la base de datos
		this.http.get<Auth>(this.baseUrl + 'usuarios/' + miId).subscribe({
			next: resp => {
				this._auth = resp; //volvemos a coger los datos del usuario
				this.verifica = true;
			},
			error: () => { this.verifica = false; }
		});

		if (localStorage.getItem('token')) {
			return true; // si existe el token, entra.
		}

		if (this.verifica) { return true } else { return false }
	}

	logout(router: Router) {
		this._auth != null;
		localStorage.removeItem('token');
		localStorage.removeItem('usuarioGuardado');
		router.navigate(['./auth/login']);
	}

	registro(user: any): Observable<any> {
		return this.http.post(`${this.baseUrl}/registro`, user);
	}


}
