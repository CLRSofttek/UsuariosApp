import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    UsuariosComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PipesModule
  ],exports:[
    UsuariosComponent
  ]
})
export class UsersModule { }
