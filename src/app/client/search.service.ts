import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Client } from './client.module'

import { DummyBlueApi } from '../app.api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
class SearchService 
{   
    meta:Client[]

    constructor(private http:Http){}


    getQueryByValue():Observable<Client[]>
    {
        return this.http.get(`${ DummyBlueApi }user`)
            .map( res => res.json() )
    }
}

export { SearchService }