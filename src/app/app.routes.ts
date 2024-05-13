import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "jobs", component: JobsComponent },
    { path: "", component: MainComponent },
    // { path: "**", component: PageNotFoundComponent}
];
