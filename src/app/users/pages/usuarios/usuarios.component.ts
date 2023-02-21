import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit{

  users!: User[];

  selectedUser : User | undefined;

  constructor(private usersService: UsuariosService){}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next : ( res: User[] ) => this.users = res,
      error: ( err ) => {
        console.log(err)
        this.users = [];
      }
    });
  }


  selectId(id:number){
    this.usersService.getUser(id).subscribe({
      next: (res : User) => {
        this.selectedUser = res;
        console.log(res);
      }
    })

  }

}
