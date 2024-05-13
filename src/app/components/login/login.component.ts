import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../../models/user';
import { JobsService } from '../../services/services';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private jobsService: JobsService, private router: Router) {

  }

  name: string = "";
  password: string = "";
  user: User | undefined;
  subscription: Subscription | null = null;

  loginClick() {
    this.subscription = this.jobsService.getUser(this.name, this.password).subscribe(user => {
      this.user = user
      console.log(this.user);
      this.jobsService.numberOfCV = 0;
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/']);
    });
  }
}
