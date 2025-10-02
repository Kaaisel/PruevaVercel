
// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  id: number;
  nombre: string;
  t_usuario: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SerLoginService {
  private baseUrl = 'https://prueba-railway.vercel.app/';

  constructor(private http: HttpClient) { }

  login(nombre: string, cont: number): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, { nombre, cont });
  }
}
