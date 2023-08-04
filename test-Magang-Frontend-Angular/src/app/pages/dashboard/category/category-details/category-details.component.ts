import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  categoryId!: number;
  category!: Category;

  constructor(private formbuilder: FormBuilder ,private router: Router,private activateRoute: ActivatedRoute, private service: CategoryServiceService){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.categoryId = param['id'];
    })

    this.getCategory();
  }

  getCategory(){
    this.service.findById(this.categoryId).subscribe(resp => {
      this.category = resp.body!;
    })
  }
  onClickDelete() {
    if (confirm('Are you sure you want to delete this category?')) {
      this.service.delete(this.categoryId).subscribe(resp => {
        alert('Successfully deleted user');
        this.router.navigate(['/', 'dashboard', 'category']);
      });
    }
  }

}
