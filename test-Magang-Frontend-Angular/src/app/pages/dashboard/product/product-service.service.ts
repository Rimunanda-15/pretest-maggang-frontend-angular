import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InputProduct, Product } from 'src/app/model/Product';
import { InputTransaction } from 'src/app/model/Transaction';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private httpclient: HttpClient) { }

  delete(id: number){
    return this.httpclient.delete<Product>(`${environment.api}/api/product/${id}`, { observe: 'response' });
  }

  findAll(){
    return this.httpclient.get<Product[]>(`${environment.api}/api/product`, {observe: "response"});
  }

  findById(id: number){
    return this.httpclient.get<Product>(`${environment.api}/api/product/${id}`, { observe: 'response' });
  }

  save(productInput: InputProduct){
    return this.httpclient.post(`${environment.api}/api/product`, productInput ,{observe: "response"});
  }

  update(id: number, productUpdate: InputProduct){
    return this.httpclient.put(`${environment.api}/api/product/${id}`, productUpdate ,{ observe: 'response' });
  }

  buy(transaction:InputTransaction){
    return this.httpclient.post(`${environment.api}/api/detailproduct`, transaction ,{observe: "response"});
  }

}
