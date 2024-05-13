import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../../models/job';

@Component({
  selector: 'app-job',
  // standalone: true,
  // imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  @Input() job: Job | undefined;
  open: boolean = false;
  @Output() cvClicked = new EventEmitter();

  bOpen(){
    this.open = !this.open;
    
  }
  cvClick() {
    console.log("in cv click");
    
    this.cvClicked.emit();
  }
}
