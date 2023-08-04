import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/Category';
import { ProductServiceService } from '../product-service.service';
import { CategoryServiceService } from '../../category/category-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm!: FormGroup
  productId!: number
  product!: Product;
  category: Category[] = []

  constructor(private activateRoute: ActivatedRoute,private service: ProductServiceService, private categoryService: CategoryServiceService, private formbuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.productId = param['id'];
    })
    this.productForm = this.formbuilder.group({
      name: ['', Validators.required],
      stok: ['', Validators.required],
      harga: ['', Validators.required],
      categoryId: ['', Validators.required],
    })

    this.getProduct();

    this.loadCategories();
  }


  getProduct(){
    this.service.findById(this.productId).subscribe(resp => {
      this.product = resp.body!;
      this.productForm.patchValue({
        name: this.product.name,
        categoryId: this.product.categoryId,
        harga: this.product.harga,
        stok: this.product.stok
      });
    })
  }

  loadCategories() {
    this.categoryService.findAll().subscribe(
      (response) => {
        this.category = response.body || [];
      },
      (error) => {
        console.error('Failed to load categories:', error);
      }
    );
  }

  update() {
    if (this.productForm.invalid) {
      // Mark all fields as touched to trigger validation messages to show
      this.productForm.markAllAsTouched();
      return;
    }else{
      console.log(this.productForm.value);
      this.service.update(this.productId,this.productForm.value).subscribe(resp => {
        if (resp.status == 200) {
          alert('berhasil mengupdate produk')
          this.router.navigate(['/','dashboard','product'])
        }
      })  
    }
  }

  backToProduct() {
    this.router.navigate(['/','dashboard','product']);
  }

}
