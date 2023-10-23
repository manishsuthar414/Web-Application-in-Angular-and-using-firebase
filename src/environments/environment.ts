// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// This is connect with Google firebase using cloub base

export const environment = {
  firebase: {
    projectId: 'webapp-3dd28',
    appId: '1:1029170097968:web:f6b80fbef1633e110262f5',
    databaseURL: 'https://webapp-3dd28-default-rtdb.firebaseio.com',
    storageBucket: 'webapp-3dd28.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBWdHqF8mpXqme0vW_oS5qYntE_7XeE27Y',
    authDomain: 'webapp-3dd28.firebaseapp.com',
    messagingSenderId: '1029170097968',
    measurementId: 'G-W54119H9P5',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
