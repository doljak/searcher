import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Client } from './client.module'
import { ErrorHandler } from '../app.error-handler'
import { DummyBlueApi } from '../app.api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
class SearchServiceClient 
{   
    meta:Client

    constructor(private http:Http){}


    getQueryByValue():Observable< Client[] >
    {
        return this.http.get(`${ DummyBlueApi }user`)
            .map( res => res.json() )
            .catch( ErrorHandler.handleError )
    }
}

export { SearchServiceClient }