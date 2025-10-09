import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css'
})
export class LobbyComponent {

  codigo: string = "123";

  constructor(private router: Router) { }

  comenzar() {
    alert("Comenzar partida ");
    this.router.navigate(['./usuario/game'])
  }
}
