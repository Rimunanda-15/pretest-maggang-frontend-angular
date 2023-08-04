import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product!: Product;

  constructor(private formbuilder: FormBuilder ,private router: Router,private activateRoute: ActivatedRoute, private service: ProductServiceService){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.productId = param['id'];
    })

    this.getProduct();
  }

  getProduct(){
    this.service.findById(this.productId).subscribe(resp => {
      this.product = resp.body!;
    })
  }
  onClickDelete() {
    if (confirm('Are you sure you want to delete this user?')) {
      this.service.delete(this.productId).subscribe(resp => {
        alert('Successfully deleted user');
        this.router.navigate(['/', 'dashboard', 'product']);
      });
    }
  }

}

