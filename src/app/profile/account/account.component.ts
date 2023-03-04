import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared/service/shared-service.service';
import { ProfileServiceService } from '../service/profile-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  constructor(private sharedService: SharedServiceService, private router: Router, private service: ProfileServiceService) {
    sharedService.username.subscribe({
      next: res => {
        this.username = res
      }
    })

    sharedService.email.subscribe({
      next: res => {
        this.email = res
      }
    })

    sharedService.password.subscribe({
      next: res => {
        this.password = res
      }
    })

    sharedService.img.subscribe({
      next: res => {
        this.img = res
      }
    })

    sharedService.id.subscribe({
      next: res => {
        this.id = res
      }
    })
  }

  username: string = ''
  email: string = ''
  password: string = ''
  img: string = ''
  id: number = 0
  users: any[] = []

  Edit() {
    this.router.navigateByUrl("/update/" + this.id)
  }
}