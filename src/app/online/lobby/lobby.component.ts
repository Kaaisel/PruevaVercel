import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LobbyService } from '../../services/lobbyService';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css'
})
export class LobbyComponent implements OnInit {

  codigo: string = "";

  constructor(private router: Router,private lobbyService:LobbyService) { }

  ngOnInit(): void {
    this.codigo = this.lobbyService.getCodigo();
  }

  comenzar() {
    alert("Comenzar partida ");
    this.router.navigate(['./usuario/game'])
  }
}
