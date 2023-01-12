import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Component/admin/admin.component';
import { CartComponent } from './Component/cart/cart.component'; 
import { DashComponent } from './Component/dash/dash.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductComponent } from './Component/product/product.component';
import { SignupComponent } from './Component/signup/signup.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
// import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CartComponent,
    DashComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    SignupComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    HttpClientModule,MatIconModule,MatMenuModule,FormsModule,
    MatInputModule,MatToolbarModule,MatButtonModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatInputModule,MatCardModule,MatBadgeModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAnalytics(() => getAnalytics()), provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()), provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), 
    providePerformance(() => getPerformance()), provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
  
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
