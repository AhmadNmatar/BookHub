import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../models/user';
import { Auth } from '../../../services/auth';
@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp implements OnInit {

  user : User = {
    firstName: '',
    lastName:'',
    email: '',
    password: '',
  }

    constructor(
    private authService: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/books']);
    }
  }

  signup() {



        this.authService.register(this.user).subscribe({
      next: () => {

        console.log('User created');

        this.router.navigate(['/books']);
      },

      error: err => {
        console.error(err);
      }
    });

  }

}
