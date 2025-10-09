import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  private _codigo: string = '';

  setCodigo(codigo: string) {
    this._codigo = codigo;
  }

  getCodigo(): string {
    return this._codigo;
  }
}
