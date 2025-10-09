import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Auth } from '../interface/auth';
import { catchError, map, Observable, of, throwError } from 'rxjs';
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

	login(nombre: string, cont: string): Observable<Auth> {
		return this.http.post<Auth>(`${this.baseUrl}/login`, { nombre, cont })
			.pipe(
				map(response => {
					this._auth = response;
					//Recordar nunca poner la contraseña real en el localStorage.
					//
					localStorage.setItem('usuario', JSON.stringify(this._auth.nombre));
					localStorage.setItem('token', '1');
					return response;
				}),
				catchError(err => {
					console.error('Error en el login:', err);
					return throwError(() => err);
				})
			);
	}


	verificaAutenticacion(): Observable<boolean> {
		const token = localStorage.getItem('token');
		if (!token) return of(false);

		// Verificar que el usuario guardado sigue existiendo
		if (!this._auth?.id) {
			const usuarioGuardado = localStorage.getItem('usuario');
			if (usuarioGuardado) {
				this._auth = JSON.parse(usuarioGuardado);
			} else {
				return of(false);
			}
		}

		return this.http.get<Auth>(`${this.baseUrl}/usuarios/${this._auth.id}`)
			.pipe(
				map(resp => {
					this._auth = resp;
					return true;
				}),
				catchError(() => of(false))
			);
	}


	logout(router: Router) {
		this._auth != null;
		localStorage.removeItem('token');
		localStorage.removeItem('usuario');
		router.navigate(['./auth/login']);
	}

	registro(user: any): Observable<any> {
		return this.http.post(`${this.baseUrl}/registro`, user);
	}


}
