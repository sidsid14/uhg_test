import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  { path: 'signout', component: SignoutComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
