import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DmComponent } from './dm/dm.component';


export const routes: Routes = [


    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'registro',component:RegistroComponent},
    {path:'usuario',component:UsuarioComponent},
    {path:'dm',component:DmComponent}

];
