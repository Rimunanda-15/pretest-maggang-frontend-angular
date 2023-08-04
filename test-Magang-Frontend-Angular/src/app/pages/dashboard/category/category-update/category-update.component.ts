import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/Category';
import { CategoryServiceService } from '../category-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements  OnInit {
  categoryUpdateForm!:FormGroup;
  categoryId!: number;
  category!: Category;

  constructor(private service: CategoryServiceService, private activateRoute: ActivatedRoute, private formbuilder:FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.categoryId = param['id'];
    })
    this.categoryUpdateForm = this.formbuilder.group({
      name: ['', Validators.required],
    });

    this.getCategory();
  }

  backToCategory(){
    this.router.navigate(['/','dashboard','category'])
  }
  getCategory(){
    this.service.findById(this.categoryId).subscribe(resp => {
      this.category = resp.body!;
      this.categoryUpdateForm.patchValue({
        name: this.category.name,
      });
    })
  }

  update(){
    this.categoryUpdateForm.markAllAsTouched();
    console.log(this.categoryUpdateForm.value)

    if (this.categoryUpdateForm.valid) {
      this.service.update(this.categoryId,this.categoryUpdateForm.value).subscribe(resp => {
        if (resp.status == 200) {
          console.log('berhasil mengubah categori')
          alert('categori berhasil diubah')
          this.router.navigate(['/','dashboard','category'])
        }
      })
    }
  }
}

