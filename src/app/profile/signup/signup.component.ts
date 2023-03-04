import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SharedServiceService } from 'src/app/shared/service/shared-service.service';
import { ProfileServiceService } from '../service/profile-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  Form!: FormGroup;
  ConfirmPass: boolean = false
  RadioValue = ""
  EmailExist:boolean = false

  constructor(private fb: FormBuilder, private service: ProfileServiceService, private router: Router, private sharedService: SharedServiceService) {
    this.Form = fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      MaleOrFemale: ['Male'],
      img: ['']
    })

    if (this.Password?.value !== this.ConfirmPassword?.value) {
      this.ConfirmPass = true
    } else {
      this.ConfirmPass = false
    }
  }

  // get inputs to use in validation
  get UserName() {
    return this.Form.get("username");
  }

  get Email() {
    return this.Form.get("email");
  }

  get Password() {
    return this.Form.get("password");
  }

  get ConfirmPassword() {
    return this.Form.get("confirmPassword");
  }

  get Image() {
    return this.Form.get("img")
  }

  get MaleORFemale() {
    return this.Form.get("MaleOrFemale")
  }

  //on sign up
  OnSignUp() {
    if (this.service.FindEmail2(this.Email?.value)) {
      this.EmailExist = true
    } else {
      this.EmailExist = false
      if (this.MaleORFemale?.value == "Male") {
        this.Form.patchValue({
          img: "https://bootdey.com/img/Content/avatar/avatar7.png"
        })
      } else {
        this.Form.patchValue({
          img: "https://cdn4.iconfinder.com/data/icons/famous-character-vol-2-flat/48/Avatar_Famous_Characters-08-512.png"
        })
      }
      this.service.NewUser(this.Form.value).subscribe(data => {
        alert("SignUp Successfully ✔")
        this.router.navigateByUrl("/page")
        this.sharedService.Loged.next(true);
        this.sharedService.username.next(this.UserName?.value)
        this.sharedService.email.next(this.Email?.value)
        this.sharedService.password.next(this.Password?.value)
        this.sharedService.img.next(this.Image?.value)
      })
    }
  }
}