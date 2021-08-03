import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// SERVIDOR
const API_URL = 'https://intense-ridge-30544.herokuapp.com/api/';

// LOCAL
// const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  constructor(private http: HttpClient) { }

  helloWorld(): Observable<any> {
    return this.http.get(API_URL + 'hello', { responseType: 'text' });
  }

}
