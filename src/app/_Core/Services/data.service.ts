import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { Observable } from "rxjs";

let urlApi = "";

const httpOption = {
    headers: new HttpHeaders({
    "Content-type": "application/json"
    })
};

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {
        urlApi = environment.urlApi;
    }   

    public get(uri: string): Observable<any> {
        return this.http.get(urlApi + "/" + uri , httpOption).pipe(
            tap(
                // Success
                () => {},
                // Fail
                catchError(err => {
                    return this.handleErr(err);
                })
            )
        )
    }

    public post(uri: string, data?: object): Observable<any> {
        return this.http.post(urlApi + "/" + uri, data, httpOption).pipe(
            tap(
                // Success
                () => {},
                // Fail
                catchError(err => {
                    return this.handleErr(err);
                })
            )
        )
    }

    handleErr(err) {
        return err;
    }
}
