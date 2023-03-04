import { Component } from '@angular/core';
import { SharedServiceService } from './shared/service/shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loginFirst';
  UserLoged: boolean = false
  constructor(private sharedService: SharedServiceService) {
    sharedService.Loged.subscribe({
      next: res => {
        this.UserLoged = res
      }
    })
  }

}
