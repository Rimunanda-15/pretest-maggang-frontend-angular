import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: User[] = [];

  constructor(private service:UserService,private router:Router){}

  ngOnInit(): void {
    this.getTableList();
  }

  getTableList(){
    this.service.findAll().subscribe(resp => {
      this.userList = resp.body!;
      console.log(resp.status)
      console.log('status code : ${resp.status}')
      console.log(resp.body)

    })
  }
  goToDetails(id: number){
    this.router.navigate(['/','dashboard','user','userdetails', id])
  }

  onClickDelete(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.service.delete(id).subscribe(resp => {
        alert('Successfully deleted user');
        this.router.navigate(['/', 'dashboard', 'user']);
      });
    }
  }
}
