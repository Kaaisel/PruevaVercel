import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  constructor(private router:Router) { }
  
    crearGrupo(){
      this.router.navigate(['unirseOnline'])
    }

    unirseGrupo(){
      this.router.navigate(['crearOnline'])
    }
    
    cargarPersonaje(){
      this.router.navigate(['cargarPersonaje'])
    }

    crearPersonaje() {
      this.router.navigate(['crearPersonaje'])
    }


}
