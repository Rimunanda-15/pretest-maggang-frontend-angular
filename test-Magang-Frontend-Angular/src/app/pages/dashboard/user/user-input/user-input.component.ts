import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  userForm!: FormGroup

  constructor(private service: UserService, private formbuilder:FormBuilder,private router:Router){}
  
  
  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(13)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  save(){
    this.userForm.markAllAsTouched();
    console.log(this.userForm.value)

    if (this.userForm.valid) {
      this.service.save(this.userForm.value).subscribe(resp => {
        if (resp.status == 200) {
          console.log('berhasil menambah user')
          alert('user berhasil ditambahkan')
          this.router.navigate(['/','dashboard','user'])
        }
      })
    }
  }

  backToUser(){
    this.router.navigate(['/','dashboard','user'])
  }


}
