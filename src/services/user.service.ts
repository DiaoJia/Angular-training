import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from 'src/models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private _http: HttpClient) {        
    }


    getUsers(): Observable<UserModel[]>{
        const url = "https://localhost:5001/api/users";
        return this._http.get<UserModel[]>(url);
    }
}

