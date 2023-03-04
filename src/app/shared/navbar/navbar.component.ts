import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../service/shared-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private service: SharedServiceService, private router: Router) {
    service.Loged.subscribe({
      next: res => {
        this.OnLogin = res
      }
    })

    service.username.subscribe({
      next: res => {
        this.username = res
      }
    })

    service.email.subscribe({
      next: res => {
        this.email = res
      }
    })

    service.img.subscribe({
      next: res => {
        this.img = res
      }
    })
  }

  OnLogin: boolean = false
  ShowAccount: boolean = false
  username: string = '';
  email: string = '';
  img: string = '';

  ShowAccountt() {
    if (this.ShowAccount == false) {
      this.ShowAccount = true
    } else {
      this.ShowAccount = false
    }
  }

  // on log out
  Logout() {
    if (confirm("Are you sure that you want to logout?")) {
      this.router.navigateByUrl("")
      this.service.Loged.next(false)
    }
  }
}
