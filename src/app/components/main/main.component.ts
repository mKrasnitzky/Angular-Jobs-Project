import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { JobsService } from '../../services/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  constructor(public jobsService: JobsService, private router: Router) {

  }
  ngOnInit(): void {
    if(!this.userName)
      this.router.navigate(['/login'])
  }


  userName: User = <any>JSON.parse(localStorage.getItem("user")!);
  // toCheck() {
  //   if(!this.userName)
  //     throw Error;
  // }
  type: string | undefined;
  //numberOfCV: number = 0;

}
