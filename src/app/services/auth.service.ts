import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {
  }
  registerUser(user){
    return this._http.post<any>(environment.API_URL, user);
  }
}
