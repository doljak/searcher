import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Book } from './book.module'
import { ErrorHandler } from '../app.error-handler'
import { DummyBlueApi } from '../app.api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
class SearchServiceBook 
{   
    meta:Book

    constructor(private http:Http){}


    getQueryByValue(query:string):Observable< Book[] >
    {
        return this.http.get(`${ DummyBlueApi }book/by-title/${ query }`)
            .map( res => res.json() )
            .catch( ErrorHandler.handleError )
    }
}

export { SearchServiceBook }