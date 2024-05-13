import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { JobComponent } from './components/job/job.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { JobsService } from './services/services';
import { SmallTextPipe } from './small-text.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    JobsComponent,
    LoginComponent,
    MainComponent,
    SmallTextPipe,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    provideClientHydration(),
    JobsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
