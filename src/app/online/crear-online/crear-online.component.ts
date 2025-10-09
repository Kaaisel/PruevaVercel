import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-online',
  standalone: true,
  imports: [],
  templateUrl: './crear-online.component.html',
  styleUrl: './crear-online.component.css'
})
export class CrearOnlineComponent {

  constructor(private router:Router) { }
  
    entrarLobby(){
      this.router.navigate(['./usuario/lobby'])
    }

}
