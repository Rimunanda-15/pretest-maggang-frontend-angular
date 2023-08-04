import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements  OnInit {
  userUpdateForm!:FormGroup;
  userId!: number;
  user!: User;

  constructor(private service: UserService, private activateRoute: ActivatedRoute, private formbuilder:FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      this.userId = param['id'];
    })
    this.userUpdateForm = this.formbuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(13)]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.getUser();
  }

  backToUser(){
    this.router.navigate(['/','dashboard','user'])
  }
  getUser(){
    this.service.findById(this.userId).subscribe(resp => {
      this.user = resp.body!;
      this.userUpdateForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone
      });
    })
  }

  update(){
    this.userUpdateForm.markAllAsTouched();
    console.log(this.userUpdateForm.value)

    if (this.userUpdateForm.valid) {
      this.service.update(this.userId,this.userUpdateForm.value).subscribe(resp => {
        if (resp.status == 200) {
          console.log('berhasil mengubah user')
          alert('user berhasil diubah')
          this.router.navigate(['/','dashboard','user'])
        }
      })
    }
  }


}
