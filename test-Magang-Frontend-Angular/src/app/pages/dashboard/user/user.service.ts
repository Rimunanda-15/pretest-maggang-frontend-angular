import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {LoginInput, User,  UserInput} from 'src/app/model/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  delete(id: number){
    return this.httpclient.delete<User>(`${environment.api}/api/user/${id}`, { observe: 'response' });
  }

  findAll(){
    return this.httpclient.get<User[]>(`${environment.api}/api/user`, {observe: "response"});
  }

  findById(id: number){
    return this.httpclient.get<User>(`${environment.api}/api/user/${id}`, { observe: 'response' });
  }

  save(userInput: UserInput){
    return this.httpclient.post(`${environment.api}/api/user`, userInput ,{observe: "response"});
  }

  update(id: number, userUpdate: UserInput){
    return this.httpclient.put(`${environment.api}/api/user/${id}`, userUpdate ,{ observe: 'response' });
  }
  login(loginInput: LoginInput){
    return this.httpclient.post(`${environment.api}/api/user/login`, loginInput ,{observe: "response"});
  }

}
