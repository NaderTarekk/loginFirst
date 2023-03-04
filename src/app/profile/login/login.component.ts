import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared/service/shared-service.service';
import { ProfileServiceService } from '../service/profile-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Form!: FormGroup
  MessageColor: string = "danger"
  message: string = ''
  EmailNotFound: boolean = false
  UserArray: any[] = []
  constructor(private fb: FormBuilder, private sharedService: SharedServiceService, private router: Router, private serv: ProfileServiceService) {
    this.Form = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  get Email() {
    return this.Form.get("email")
  }

  get Password() {
    return this.Form.get("password")
  }

  // on login 
  OnLogin() {
    if (this.serv.FindEmail(this.Email?.value, this.Password?.value)) {
      this.EmailNotFound = true
      this.message = "Loged Successfully ✔"
      this.MessageColor = "success"
      this.sharedService.username.next(this.serv.UserName.username)
      this.sharedService.email.next(this.serv.UserName.email)
      this.sharedService.password.next(this.serv.UserName.password)
      this.sharedService.img.next(this.serv?.UserName.img)
      this.sharedService.id.next(this.serv?.UserName.id)
      this.sharedService.password.next(this.Password?.value)

      setTimeout(() => {
        this.sharedService.Loged.next(true);
        this.router.navigateByUrl("/page");
      }, 2000);
    } else {
      this.EmailNotFound = true
      this.MessageColor = "danger"
      this.message = "Wrong Email or Password"
    }
  }
}
