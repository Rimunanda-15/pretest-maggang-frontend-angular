import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, InputCategory } from 'src/app/model/Category';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private httpclient: HttpClient) { }
  delete(id: number){
    return this.httpclient.delete<Category>(`${environment.api}/api/category/${id}`, { observe: 'response' });
  }

  findAll(){
    return this.httpclient.get<Category[]>(`${environment.api}/api/category`, {observe: "response"});
  }

  findById(id: number){
    return this.httpclient.get<Category>(`${environment.api}/api/category/${id}`, { observe: 'response' });
  }

  save(cateogryUpdate: InputCategory){
    return this.httpclient.post(`${environment.api}/api/category`, cateogryUpdate ,{observe: "response"});
  }

  update(id: number, cateogryUpdate: InputCategory){
    return this.httpclient.put(`${environment.api}/api/category/${id}`, cateogryUpdate ,{ observe: 'response' });
  }
}
