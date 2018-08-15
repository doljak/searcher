import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { ErrorHandler } from '../../app.error-handler'
import { DummyBlueApi } from '../../app.api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
class SearchService
{   
    constructor(private http:Http){}

    getQueryByValue(query:string):Observable< any[] >
    {
        return this.http.get(`${ DummyBlueApi }${ query }`)
            .map( res => res.json() )
            .catch( ErrorHandler.handleError )
    }
}

export { SearchService }