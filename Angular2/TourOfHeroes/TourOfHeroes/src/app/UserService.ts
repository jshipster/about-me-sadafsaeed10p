import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService
{
    private serviceUrl:string = 'http://conduit.productionready.io/api/profiles/eric';
    
    constructor(private http:Http){ }

    GetUser()
    {
       return this.http.get(this.serviceUrl).map((res:Response) => res.json());
    }
}