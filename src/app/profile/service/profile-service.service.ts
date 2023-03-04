import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
class User {
  user!: string
}
@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  users: any[] = []
  constructor(private http: HttpClient) {
    this.GetUsers().subscribe((data: any) => {
      this.users = data
    })
  }

  UserName: any = {};

  // get users 
  GetUsers() {
    return this.http.get("http://localhost:3000/user")
  }

  // get user by id 
  GetUserById(id: number) {
    return this.http.get("http://localhost:3000/user/" + id)
  }

  // on user sign up send data to api
  NewUser(data: any) {
    return this.http.post("http://localhost:3000/user", data)
  }

  // update user informations
  UpdateInformations(data: any, id: number) {
    return this.http.put("http://localhost:3000/user/" + id, data)
  }

  // find email on login
  FindEmail(email: any, password: any) {
    this.UserName = this.users.find(user => user.email == email);
    return this.users.find(user => user.email == email && user.password == password)
  }
  FindEmail2(email: any) {
    return this.users.find(user => user.email == email)
  }
}
