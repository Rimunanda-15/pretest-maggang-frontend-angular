import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { ProductServiceService } from '../product/product-service.service';
import { CategoryServiceService } from '../category/category-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalProductCount: number = 0;
  totalUserCount: number = 0;
  totalCategoryCount: number = 0;

  constructor(private userService: UserService, private productService: ProductServiceService, private categoryService: CategoryServiceService){}

  ngOnInit(): void {
    this.userService.getTotalUserCount().subscribe(
      (response) => {
        this.totalUserCount = response.body!;
      },
      (error) => {
        console.error('Error fetching total product count:', error);
      }
    );

    // this.productService.getTotalProductCount().subscribe(
    //   (response) => {
    //     this.totalProductCount = response.body!;
    //   },
    //   (error) => {
    //     console.error('Error fetching total product count:', error);
    //   }
    // );
    
    this.categoryService.getTotalCategoryCount().subscribe(
      (response) => {
        this.totalProductCount = response.body!;
      },
      (error) => {
        console.error('Error fetching total product count:', error);
      }
    );
  }

}
