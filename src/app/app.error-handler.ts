import { Response } from '@angular/http'
import { Observable } from '../../node_modules/rxjs/Observable';

class ErrorHandler
{
    static handleError(error: Response | any)
    {
        const errorMessage:String = (error instanceof Response) ?
            `Erro ${ error.status } ao tentar acessar a url ${ error.url } - ${ error.statusText }`
            : error.toString()

        return Observable.throw(errorMessage)
    }

}

export { ErrorHandler }