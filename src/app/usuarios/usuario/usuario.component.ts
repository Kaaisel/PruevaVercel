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



    /* Ventana de carga*/

    pSeleccionado:string = "Mikel";
    cancelar(){
      alert("Cancelar");
    }
}
