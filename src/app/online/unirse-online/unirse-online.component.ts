import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unirse-online',
  standalone: true,
  imports: [],
  templateUrl: './unirse-online.component.html',
  styleUrl: './unirse-online.component.css'
})
export class UnirseOnlineComponent {

    constructor(private router:Router) { }
    
      entrarLobby(){
        this.router.navigate(['lobby'])
      }
      
}
