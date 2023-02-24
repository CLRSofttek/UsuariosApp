import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  // is this enought, or is it too injectable
  getUserByProperty(property: string, query:string):Observable<User[]>{
    let params = new HttpParams()
    .set(`${property}_like`,query)
    return this.httpClient.get<User[]>(`${environment.apiURL}`,{params:params})
  }

  //better?? well, if security was a requirement i should make validations on the query like `no ?; allowed`
  getUserByName(query:string):Observable<User[]>{
    let params = new HttpParams()
    .set(`name_like`,query)
    return this.httpClient.get<User[]>(`${environment.apiURL}`,{params:params})
  }

}
