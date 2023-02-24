import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserInputComponent } from '../../components/user-input/user-input.component';
import { User } from '../../model/user.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})



export class UsuariosComponent implements OnInit{
searchingBy : string | undefined;
@ViewChildren(UserInputComponent) userInputs!: QueryList<UserInputComponent>;

reset(except?:UserInputComponent){
  this.userInputs.forEach(
    input => {
      if(input.nombre != except?.nombre)
        input.reset();
    }
  )
  if(this.searchingBy != except?.nombre){
    this.searchingBy = except?.nombre;
    this.getAllUsers();
  }

}



buscar($event: string,propiedad: UserInputComponent) {
  let atributo: string = ''
  switch (propiedad.nombre) {
    case 'nombre':
      atributo = 'name';
      break;
    case 'email':
      atributo = 'email';
      break;
    case 'ciudad':
      atributo = 'address.city'
      break;
    case 'teléfono':
      atributo = 'phone'
      break;
    default:
      break;
  }
  this.usersService.getUserByProperty(atributo,$event)
  .subscribe({
    next : ( res: User[] ) => {
      this.users = res
      this.sort();
    },
    error: ( err ) => {
      console.log(err)
      this.getAllUsers;
    }
  });
//this should be done with an operaTOR


}

toggleSort(propiedad  : string){
  this.sortedBy =
      this.sortedBy === propiedad?
      undefined:
      propiedad;
  this.sort();
}

  sort() {
    // console.log(`sorting by ${this.sortedBy}`)
    switch (this.sortedBy) {
      case 'nombre':
          this.users.sort((a,b) => a.name<b.name?-1:1);
        break;
      case 'email':
        this.users.sort((a,b) => a.email<b.email?-1:1);
        break;
      case 'ciudad':
        this.users.sort((a,b) => a.address.city<b.address.city?-1:1);
        break;
      case 'teléfono':
        this.users.sort((a,b) => a.phone<b.phone?-1:1);
        break;
      default:
        // console.log('default')
        this.users.sort((a,b) => a.id-b.id);
        break;
    }

  }

  users!: User[];

  selectedUser : User | undefined;

  sortedBy : string | undefined;

  constructor(private usersService: UsuariosService){}

  ngOnInit(): void {
    this.getAllUsers()
  }


  getAllUsers(){
    this.usersService.getUsers().subscribe({
      next : ( res: User[] ) => {
        this.users = res
        this.sort()

      },
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
