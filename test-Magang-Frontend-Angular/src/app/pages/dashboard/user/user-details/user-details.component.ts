import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId!: number;
  user!: User;

  constructor(private formbuilder: FormBuilder ,private router: Router,private activateRoute: ActivatedRoute, private service: UserService){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.userId = param['id'];
    })

    this.getUser();
  }

  getUser(){
    this.service.findById(this.userId).subscribe(resp => {
      this.user = resp.body!;
    })
  }
  onClickDelete() {
    if (confirm('Are you sure you want to delete this user?')) {
      this.service.delete(this.userId).subscribe(resp => {
        alert('Successfully deleted user');
        this.router.navigate(['/', 'dashboard', 'user']);
      });
    }
  }

}
