import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro/registro.component';

import { CrearOnlineComponent } from './online/crear-online/crear-online.component';
import { UnirseOnlineComponent } from './online/unirse-online/unirse-online.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { DmComponent } from './usuarios/dm/dm.component';
import { CargarPersonajeComponent } from './personaje/cargar-personaje/cargar-personaje.component';
import { CrearPersonajeComponent } from './personaje/crear-personaje/crear-personaje.component';


export const routes: Routes = [


    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'registro',component:RegistroComponent},
    {path:'usuario',component:UsuarioComponent},
    {path:'dm',component:DmComponent},

    /* Online */
    {path:"crearOnline", component:CrearOnlineComponent},
    {path:"unirseOnline",component:UnirseOnlineComponent},

    /* personajes */
    {path:"cargarPersonaje", component:CargarPersonajeComponent},
    {path:"crearPersonaje",component:CrearPersonajeComponent},

];
