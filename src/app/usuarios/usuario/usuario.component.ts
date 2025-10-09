import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  constructor(private router:Router) { }
  
    crearGrupo(){
      this.router.navigate(['./usuario/unirse-online'])
    }

    unirseGrupo(){
      this.router.navigate(['./usuario/crear-online'])
    }
    
    cargarPersonaje(){
      this.router.navigate(['./usuario/cargar-personaje'])
    }

    crearPersonaje() {
      this.router.navigate(['./usuario/crear-personaje'])
    }



    /* Ventana de carga*/

    pSeleccionado:string = "Mikel";
    cancelar(){
      alert("Cancelar");
    }
}
