import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../services/auth';
import { LoginForm } from '../../../models/login-form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  data : LoginForm = {
    email : '',
    password : '',
  }


  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  login() {

    this.authService.login(this.data).subscribe({
      next: () => {

        console.log('User logged in successfully');

        this.router.navigate(['/books']);
      },

      error: err => {
        console.error(err);
      }
    });
  }
}
