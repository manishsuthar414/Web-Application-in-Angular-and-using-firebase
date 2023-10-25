import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

// this authguard are route can verify 
export class AuthGuardService {

  constructor(private authSer:AuthService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise(resolve => {
      this.authSer.afAuth.authState.subscribe(user => {
        if(user) resolve(true)
        else {
          this.router.navigate(['/login'])
          resolve(false)
        }
      })
    })
  }
}
