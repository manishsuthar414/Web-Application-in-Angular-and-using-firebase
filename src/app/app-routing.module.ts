import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Component/admin/admin.component';
import { CartComponent } from './Component/cart/cart.component';
import { DashComponent } from './Component/dash/dash.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductComponent } from './Component/product/product.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [

  {
    path:'login',
    component: LoginComponent,
    // ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    component: HomeComponent,
    // ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path:'dash',
    component:DashComponent,
    // ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'admin',
    component:AdminComponent
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
