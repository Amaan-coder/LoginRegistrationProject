import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  public httpGet(url: any): Observable<any> {
    return this.http.get<any>(url);
  }

  public httpPost(url: any, reqData: any): Observable<any> {
    return this.http.post<any>(url, reqData);
  }

  IsLoggenIn() {
    return sessionStorage.getItem('username') != null;
  }
  GetUserRole() {
    return sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole')?.toString() : '';
  }
}

