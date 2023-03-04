import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../service/profile-service.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss']
})
export class UpdatePageComponent {
  id!: any
  user: any = {}
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ProfileServiceService) {
    this.id = activatedRoute.snapshot.paramMap.get("id")
    this.service.GetUserById(this.id).subscribe((data: any) => {
      this.user = data
    })
  }

  update() {
    console.log(this.user);
    
    this.service.UpdateInformations(this.user, this.id).subscribe(data => {
      alert("successfully process ✔")
    })
  }
}
