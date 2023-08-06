import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { UserService } from '../dashboard/user/user.service';
import { Router } from '@angular/router';

interface ResponseData {
  status: string;
  data: {
    user: User;
  };
  message?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: User[] = [];

  constructor(private service: UserService, private formbuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      id: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.loadUser();
  }

  loadUser() {
    this.service.findAll().subscribe(
      (response) => {
        this.user = response.body || [];
      },
      (error) => {
        console.error('Failed to load categories:', error);
      }
    );
  }

  login() {
    if (this.loginForm.invalid) {

      alert('invalid credential')
      // Mark all fields as touched to trigger validation messages to show
      this.loginForm.markAllAsTouched();
      
      return;
    } else {
      console.log(this.loginForm.value);
      this.service.login(this.loginForm.value).subscribe(
        (response: any) => {
          const responseData: ResponseData = response.body!;
          if (response.status === 200) {
            if (responseData.status === 'success') {
              // Login successful
              const user = responseData.data.user;
              alert('Berhasil login');
              this.route.navigate(['/user/buy', user.id]);
            } else {
              // Handle other success messages or additional data as needed
              this.route.navigate(['/user/buy', this.loginForm.value.id]);
              alert(responseData.message);
            }
          } else if (response.status === 400) {
            alert('invalid credential')
            // Validation errors
            if (responseData.message) {
              // Handle validation errors herealert('invalid credential')
              alert('invalid credential')
              
            }
          } else {
            // Handle other status codes if needed
            
          }
        },
        (error) => {
          // Handle error if the request fails
          alert('invalid credential')
          
        }
      );
    }
  }
}
