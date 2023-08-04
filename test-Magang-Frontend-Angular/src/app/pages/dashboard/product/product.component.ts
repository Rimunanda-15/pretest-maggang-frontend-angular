import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductServiceService } from './product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];

  constructor(private service:ProductServiceService,private router:Router){}

  ngOnInit(): void {
    this.getTableList();
  }

  getTableList(){
    this.service.findAll().subscribe(resp => {
      this.productList = resp.body!;
      console.log(resp.status)
      console.log('status code : ${resp.status}')
      console.log(resp.body)

    })
  }
  goToDetails(id: number){
    this.router.navigate(['/','dashboard','product','productdetails', id])
  }
  goToEdit(id: number){
    this.router.navigate(['/','dashboard','product','productedit', id])
  }

}
