import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';

const baseUrl = 'http://localhost:8080/api/v1/customers';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }

  delete(data: any): Observable<any> {
    return this.http.delete(baseUrl, data);
  }

  search(data: any): Observable<any> {
    return this.http.get(baseUrl, data);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl);
  }
}
