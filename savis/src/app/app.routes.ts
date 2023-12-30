import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {StartComponent} from "./start/start.component";
import {ProfileComponent} from "./profile/profile.component";
import {RegistrationsComponent} from "./registrations/registrations.component";
import {FormularsComponent} from "./formulars/formulars.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'start', component: StartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'registration', component: RegistrationsComponent },
  { path: 'formulars', component: FormularsComponent },
];
