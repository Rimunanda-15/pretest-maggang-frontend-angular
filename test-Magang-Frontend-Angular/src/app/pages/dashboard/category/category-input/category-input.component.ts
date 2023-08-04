import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../category-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-input',
  templateUrl: './category-input.component.html',
  styleUrls: ['./category-input.component.css']
})
export class CategoryInputComponent implements OnInit {
  categoryForm!: FormGroup

  constructor(private service: CategoryServiceService, private formbuilder:FormBuilder,private router:Router){}
  
  
  ngOnInit(): void {
    this.categoryForm = this.formbuilder.group({
      name: ['', Validators.required],
    });
  }

  save(){
    this.categoryForm.markAllAsTouched();
    console.log(this.categoryForm.value)

    if (this.categoryForm.valid) {
      this.service.save(this.categoryForm.value).subscribe(resp => {
        if (resp.status == 200) {
          console.log('berhasil menambah category')
          alert('category berhasil ditambahkan')
          this.router.navigate(['/','dashboard','category'])
        }
      })
    }
  }

  backToUser(){
    this.router.navigate(['/','dashboard','category'])
  }


}
