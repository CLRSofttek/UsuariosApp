import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PipesModule } from '../pipes/pipes.module';
import { UserInputComponent } from './components/user-input/user-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuariosComponent,
    UserCardComponent,
    UserInputComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PipesModule,
    FormsModule
  ],exports:[
    UsuariosComponent
  ]
})
export class UsersModule { }
