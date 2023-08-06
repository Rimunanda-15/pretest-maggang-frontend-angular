import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductServiceService } from '../dashboard/product/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from '../dashboard/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  productList: Product[] = [];
  userId!: number;
  user!: User;
  transactionForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private service: ProductServiceService,
    private activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      this.userId = param['id'];
    });

    this.transactionForm = this.formbuilder.group({
      userId: this.userId,
      productId: ['', Validators.required],
      quantity: ['', Validators.required],
    });
    this.getUser();
    this.getProduct();
  }

  getUser() {
    this.userService.findById(this.userId).subscribe((resp) => {
      this.user = resp.body!;
    });
  }
  getProduct() {
    this.service.findAll().subscribe((resp) => {
      this.productList = resp.body!;
      console.log(resp.status);
      console.log('status code : ${resp.status}');
      console.log(resp.body);
    });
  }

  buyNow(productId: number) {
      // Set the productId form control value based on the clicked product's id
      this.transactionForm.get('productId')?.patchValue(productId);
  
      console.log('Form Value:', this.transactionForm.value);
  
      this.service.buy(this.transactionForm.value).subscribe(resp => {
        if (resp.status == 200) {
          alert('berhasil menambah produk');
          this.router.navigate(['/', 'thankyou']);
        }
      });
    
  }
}
