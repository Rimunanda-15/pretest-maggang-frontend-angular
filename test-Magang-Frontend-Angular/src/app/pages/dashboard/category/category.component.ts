import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { CategoryServiceService } from './category-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList: Category[] = [];

  constructor(private service:CategoryServiceService,private router:Router){}

  ngOnInit(): void {
    this.getTableList();
  }

  getTableList(){
    this.service.findAll().subscribe(resp => {
      this.categoryList = resp.body!;
      console.log(resp.status)
      console.log('status code : ${resp.status}')
      console.log(resp.body)

    })
  }
  goToDetails(id: number){
    this.router.navigate(['/','dashboard','category','categorydetails', id])
  }
  goToEdit(id: number){
    this.router.navigate(['/','dashboard','category','categoryedit', id])
  }

}
