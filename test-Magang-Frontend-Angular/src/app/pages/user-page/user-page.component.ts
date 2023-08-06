import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductServiceService } from '../dashboard/product/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from '../dashboard/user/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  productList: Product[] = [];
  userId!: number;
  user!: User;

  constructor(private userService: UserService,private service: ProductServiceService, private activateRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.userId = param['id'];
    })
    this.getUser();
    this.getProduct();
  }

  getUser(){
    this.userService.findById(this.userId).subscribe(resp => {
      this.user = resp.body!;
    })
  }
  getProduct(){
    this.service.findAll().subscribe(resp => {
      this.productList = resp.body!;
      console.log(resp.status)
      console.log('status code : ${resp.status}')
      console.log(resp.body)
    })
  }

}
