import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/Category';
import { ProductServiceService } from '../product-service.service';
import { CategoryServiceService } from '../../category/category-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.css']
})
export class ProductInputComponent implements OnInit {

  productForm!: FormGroup
  category: Category[] = []

  constructor(private service: ProductServiceService, private categoryService: CategoryServiceService, private formbuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.productForm = this.formbuilder.group({
      name: ['', Validators.required],
      stok: ['', Validators.required],
      harga: ['', Validators.required],
      categoryId: ['', Validators.required],
    })

    this.loadCategories();
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

  save() {
    if (this.productForm.invalid) {
      // Mark all fields as touched to trigger validation messages to show
      this.productForm.markAllAsTouched();
      return;
    }else{
      console.log(this.productForm.value);
      this.service.save(this.productForm.value).subscribe(resp => {
        if (resp.status == 200) {
          alert('berhasil menambah produk')
          this.router.navigate(['/','dashboard','product'])
        }
      })  
    }
  }

  backToProduct() {
    this.router.navigate(['/','dashboard','product']);
  }

}
