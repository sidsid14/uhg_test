# AuthenticationProject

This project should do the following-

1. Implement SignIn, SignUp
2. On Successfull Login redirect to a Dashboard page.
3. Error Handling.
   
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.
- The project is deployed on heroku server and is accessible here [Live Access](https://uhg-auth-app.herokuapp.com/)

## Application Features

1. Sign Up Page -
   - Use of **Reactive Forms**.
   - Use of **resuable** input component.
   - Use of **Validators** Validation for required, minlength, maxlength.
   - Use of **Custom Validator** for passwordMatch.
   - Use of **Async Validator** for async validation if the username exists in backend.
   - Receive JWT token as a cookie parameter which is retained for further requests using **Interceptors** withCredentials parameter.
   - On successful sign up redirecting user to Dashboard page.
   - Displaying error in case of network not reachable.
   - This page is hidden after the user is authenticated.
2. Sign In Page -
   - Use of reusable input component.
   - Validation for required fields.
   - Displaying error in case of incorrect username/password or network not reachable.`
   - On successful sign in redirecting user to Dashboard page.
   - Use of Reactive Forms.
   - This page is hidden after the user is authenticated.
3. Authentication Service -
   - Global **Service** for making http requests.
   - Holds **Interfaces** for possible respones.
   - Make requests for signup, signin, signedin, signout
4. Dashboard Page -
   - Protected **lazy load module** using **canLoad** routeGuard.
   - Unauthenticated user is redirected to login page.
   - Displays placeholder component.
   - This page is hidden after the user is not authenticated.
5. NotFound Page -
   - It is displayed if the user access unavailable page.
6. SignOut Page -
    - This page shows a message while the user is getting signed out.
    - This page is hidden after the user is authenticated.

## Backend server apis

|      Path      | Method |                                     Body                                     |                      Description                      |
| :------------: | :----: | :--------------------------------------------------------------------------: | :---------------------------------------------------: |
|  /auth/signup  |  POST  | ```{ usernamue: String, password:String, passwordConfirmation: String }``` | Signs up for a new account with the provided username |
|  /auth/signin  |  POST  |                  ```{ username: String, password: String }```                  |          Signs in with the provided username          |
| /auth/username |  POST  |                             ```{ username: String }```                             |     Checks to see if a username is already in use     |
| /auth/signedid |  GET   |                                                                              |   Checks to see if the user is currently signed in    |
| /auth/signout  |  POST  |                                      ```{}```                                      |                  Signs the user out                   |

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
