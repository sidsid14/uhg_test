import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
} from '@angular/forms';
import { catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient) {}
  validate = (control: AbstractControl) => {
    const { value } = control;
    return this.http
      .post<any>('https://api.angular-email.com/auth/username', {
        username: value,
      })
      .pipe(
        map((value) => {
            return null;
        }),
        catchError((err)=>{
            console.log(err);
            if(err.error.username){
                return of({ nonUniqueUsername : true})
            }else{
                return of({connectionError: true})
            }
        })
      );
  };
}
