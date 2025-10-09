import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LobbyService } from '../../services/lobbyService';

@Component({
  selector: 'app-crear-online',
  standalone: true,
  imports: [],
  templateUrl: './crear-online.component.html',
  styleUrl: './crear-online.component.css'
})
export class CrearOnlineComponent {

  constructor(private router: Router, private lobbyService: LobbyService) { }

  codGenerado: number | string = '';
  codGe: boolean = false;


  generar() {
    this.codGenerado = Math.random().toString(36).substring(2, 8).toUpperCase();
    this.codGe = true;
  }

  entrarLobby() {

    if (!this.codGe) {
      alert('Por favor, genere un código primero.');
      return;
    } else {
      // Guardar el codigo en el servicio
      this.lobbyService.setCodigo(this.codGenerado.toString());
      // Navegar al componente del lobby
      this.router.navigate(['./usuario/lobby'])
    }
  }

}
