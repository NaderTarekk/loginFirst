import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './main/page/page.component';
import { AccountComponent } from './profile/account/account.component';
import { LoginComponent } from './profile/login/login.component';
import { SignupComponent } from './profile/signup/signup.component';
import { UpdatePageComponent } from './profile/update-page/update-page.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signUp", component: SignupComponent },
  { path: "page", component: PageComponent },
  { path: "login", component: LoginComponent },
  { path: "account", component: AccountComponent },
  { path: "update/:id", component: UpdatePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
