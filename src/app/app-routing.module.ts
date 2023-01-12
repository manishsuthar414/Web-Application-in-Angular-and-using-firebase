import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Component/admin/admin.component';
import { CartComponent } from './Component/cart/cart.component';
import { DashComponent } from './Component/dash/dash.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductComponent } from './Component/product/product.component';
import { SignupComponent } from './Component/signup/signup.component';
import { AuthGuardService } from './Services/auth-guard/auth-guard.service';

const routes: Routes = [

  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'dash',
    component:DashComponent, canActivate: [AuthGuardService]
  },
  {
    path:'product',
    component:ProductComponent, canActivate: [AuthGuardService]
  },
  {
    path:'cart',
    component:CartComponent, canActivate: [AuthGuardService]
  },
  {
    path:'admin',
    component:AdminComponent, canActivate: [AuthGuardService]
  },
  {
    path:'signup',
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function canActivate(redirectLoggedInToHome: any): import("@angular/router").Route {
  throw new Error('Function not implemented.');
}

