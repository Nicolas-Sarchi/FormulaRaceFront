import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private URL = "http://localhost:5084/driver";

  constructor(private httpClient: HttpClient  ) { }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.URL}`);
  }
 
  get(id : number): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/${id}`);
  }
 
  create(item : any): Observable<any> {
    return this.httpClient.post<any>(`${this.URL}`, item);
  }
 
  update(id : number, item : any): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}/${id}`, item);
  }
 
  delete(id : number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/${id}`);
  }
}
