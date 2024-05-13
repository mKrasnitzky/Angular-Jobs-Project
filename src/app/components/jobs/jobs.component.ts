import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { discipline } from '../../../models/discipline';
import { Job } from '../../../models/job';
import { User } from '../../../models/user';
import { JobsService } from '../../services/services';

@Component({
  selector: 'app-jobs',
  // standalone: true,
  // imports: [],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {

  constructor(private jobsService: JobsService) {
  }
  ngOnInit(): void {
    this.jobsService.getFJobs();
    this.jobs = this.jobsService.filterJobs(this.user.field);
    this.loginForm = new FormGroup({
      findField: new FormControl(),
      findArea: new FormControl(),
    });
  }

  find: boolean = false;
  loginForm!: FormGroup;
  @Input() user: User = <any>JSON.parse(localStorage.getItem("user")!);
  jobs!: Observable<Job[]>;
  addCV() {
    this.jobsService.addCV();
  }
  search(){
    if(!this.find)
      this.find = true;
    else{
      let t = this.loginForm.value;      
      this.jobs = this.jobsService.filterJobs(t.findField, t.findArea);
    }
  }

}
