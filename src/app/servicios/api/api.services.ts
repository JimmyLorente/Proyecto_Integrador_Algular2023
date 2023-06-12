import { Injectable } from "@angular/core";
import {LoginI} from '../../modelos/login.interface'; 
import { ResponseI } from '../../modelos/response.interface';
import{HttpClient, HttpHeaders}from '@angular/common/http';
import{Observable} from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class ApiService {
    url:string = "http://solodata.es" //Falta api para hacer nodejs
    constructor(private http:HttpClient){} 

    loginByEmaill(form:LoginI): Observable<ResponseI>{ 
        let direccion = this.url + "auth";
        return this.http.post<ResponseI>(direccion,form);
        
    }

}

