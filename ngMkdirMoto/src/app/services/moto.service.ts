import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Motorcycle } from '../models/motorcycle';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

baseUrl = 'http://localhost:8084/';
urlGet = this.baseUrl + 'api/motorcycles';
url = this.baseUrl + 'api/motorcycle';


  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Motorcycle[]> {
    return this.http.get<Motorcycle[]>(this.urlGet).pipe(
    catchError((err: any) => {
      console.error('MotorcycleService.index(): error retrieving motorcycle list');
      return throwError(err);
    })
    );
  }

  create(motorcycle: Motorcycle) {
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    return this.http.post<Motorcycle>(this.url, motorcycle, httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          'error creating motorcycle' + err
        );
      }
      )
    );
  }

  update(motorcycle: Motorcycle) {
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    return this.http.put<Motorcycle>(this.url, motorcycle, httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          'error updating motorcycle' + err
        );
      }
      )
    );
  }

  delete(id: number) {
    return this.http.delete<Motorcycle>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.error('Error deleting motorcycle');
        return throwError(err);
      })
      );
  }

}
