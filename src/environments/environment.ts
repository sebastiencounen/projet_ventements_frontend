// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverAddress: "https://localhost:5001/api",
  firebase: {
    apiKey: "AIzaSyC3p2Phzc94IlRPYYOfgCgqROPRKdFPfoI",
    authDomain: "ventements-83dd9.firebaseapp.com",
    projectId: "ventements-83dd9",
    storageBucket: "ventements-83dd9.appspot.com",
    messagingSenderId: "1080049376592",
    appId: "1:1080049376592:web:1e58897706bb61856a2055"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
