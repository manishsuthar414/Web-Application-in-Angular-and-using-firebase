import { Injectable, NgZone, resolveForwardRef } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ProfileUser, User } from '../Models/user';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: Observable<any>;
  userId: string | undefined;

//   // SaveUser(product: any){
//   //   return this.http.post<any>('https://webapp-3dd28-default-rtdb.firebaseio.com/product.json',product)
//   // }

  createUserWithEmailAndPassword(value: any) {
    throw new Error('Method not implemented.');
  }
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone ,// NgZone service to remove outside scope warning
    public http:HttpClient
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
//   // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['product']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
       alert("Invaild")
      });
  }
//   // Sign up with email/password

//   SignUp(email:string,password:string ,displayName:string) {
   
//     return this.afAuth
//       .createUserWithEmailAndPassword(email, password)
//       .then((result) => {
//         result.user?.updateProfile({
//           displayName: displayName,
          
//           // lastName: lastName,
        
//         }).then(()=>{
//           this.SetUserData(result.user);
//           result.user?.metadata
//         })
//         /* Call the SendVerificaitonMail() function when new user sign 
//         up and returns promise */
//         // this.SendVerificationMail();
//         // this.SetUserData(result.user);
//         console.log(result.user)
//         console.log(this.SetUserData(result.user))
//         alert("Success")
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   }

//   // Reset Forggot password
//   // ForgotPassword(passwordResetEmail: string) {
//   //   return this.afAuth
//   //     .sendPasswordResetEmail(passwordResetEmail)
//   //     .then(() => {
//   //       window.alert('Password reset email sent, check your inbox.');
//   //     })
//   //     .catch((error) => {
//   //       window.alert(error);
//   //     });
//   // }
//   // Returns true when user is looged in and email is verified
//   get isLoggedIn(): boolean {
//     const user = JSON.parse(localStorage.getItem('user')!);
//     return user !== null && user.emailVerified !== false ? true : false;
//   }
//   // Sign in with Google
//   // GoogleAuth() {
//   //   return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
//   //     if (res) {
//   //       this.router.navigate(['home']);
//   //     }
//   //   });
//   // }
//   // Auth logic to run auth providers
//   // AuthLogin(provider: any) {
//   //   return this.afAuth
//   //     .signInWithPopup(provider)
//   //     .then((result) => {
//   //       this.ngZone.run(() => {
//   //         this.router.navigate(['/home']);
//   //       });
//   //       this.SetUserData(result.user);
//   //     })
//   //     .catch((error) => {
//   //       window.alert(error);
//   //     });
//   // }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`,
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      // lastName: user.lastName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      
    };
    return userRef.set(userData,
       {
      merge: true,
    }
    );
    
  }
//   // Sign out
//   SignOut() {
//     return this.afAuth.signOut().then(() => {
//       localStorage.removeItem('user');
//       this.router.navigate(['login']);
//     });
//   }
// }



// // function resolve(SetUserData: (user: any) => Promise<void>) {
// //   throw new Error('Function not implemented.');
 }
