import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { UserModel } from './usermodel';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _fileUrl: string ="/assets/mockData/users.json";
  constructor(private _http: HttpClient) { }

  getUsers() : Observable<UserModel[]>{
    return this._http.get<UserModel[]>(this._fileUrl).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error.message);
      }) 
    )
  }  
}
