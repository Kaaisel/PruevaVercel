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
import { LobbyComponent } from './online/lobby/lobby.component';
import { GameComponent } from './online/game/game.component';
import { authGuard } from './auth/auth.guards';


export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  // Página principal
  { path: "home", component: HomeComponent },

  // Autenticación
  {
    path: "auth",
    children: [
      { path: "login", component: LoginComponent },
      { path: "registro", component: RegistroComponent },
      { path: "**", redirectTo: "login" }
    ]
  },

  // Zona protegida de usuario
  {
    path: "usuario",
    canActivate: [authGuard],
    children: [
      { path: "", component: UsuarioComponent },

      // Online
      { path: "crear-online", component: CrearOnlineComponent },
      { path: "unirse-online", component: UnirseOnlineComponent },
      { path: "lobby", component: LobbyComponent },
      { path: "game", component: GameComponent },

      // Personajes
      { path: "cargar-personaje", component: CargarPersonajeComponent },
      { path: "crear-personaje", component: CrearPersonajeComponent }
    ]
  },

  // Ruta comodín final
  { path: "**", redirectTo: "home" }
];



