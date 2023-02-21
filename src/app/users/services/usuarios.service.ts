import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UsuariosService {
  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(environment.apiURL)
  }

  getUser(id: number):Observable<User>{
    return this.httpClient.get<User>(`${environment.apiURL}/${id}`)
  }

}
