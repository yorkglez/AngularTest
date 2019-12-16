import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getData(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/api/users');
  }
  
  Save(user)
  {
    return this.http.post('http://localhost:8080/api/users',user)
  }


}
//*Model
export interface User{
  id : number,
  name : string,
  lastname : string,
  email : string,
  password:string,
  age:string ,
  sex:string ,
  status:string,
  porfileimageRoute:string ,
  description:string ,
  token:string ,
  createAt:string ,
  updateAt:string 
}