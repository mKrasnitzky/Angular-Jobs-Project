import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { discipline } from '../../models/discipline';
import { Job } from '../../models/job';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private httpClient: HttpClient) { }

  jobs!: Observable<Job[]>;
  numberOfCV: number = 0;
  public addCV() {
    this.numberOfCV++;
    console.log(this.numberOfCV);

  }

  public getFJobs() {
    this.jobs = this.getJobs();
  }

  public filterJobs(jobsField: discipline | undefined, area?: string) {
    this.getFJobs();
    return this.jobs.pipe(map((myJobs) => myJobs.filter(j =>{
      console.log(area === "");
      return (jobsField === undefined || jobsField === null || j.jobField === jobsField) &&
      (area === undefined || area === "" || j.area === area)})))
  }

  user: Observable<any> | undefined;
  public getJobs() {
    
    return this.httpClient.get<Job[]>('https://localhost:44320/api/jobs/getjobs')
  }

  public getUser(name: string, password: string) {

    this.user = this.httpClient.get<User>(`https://localhost:44320/api/jobs/${name}/${password}`)

    return this.user;
  }
}
