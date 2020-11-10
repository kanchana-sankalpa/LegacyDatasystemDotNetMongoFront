import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class SearchService {
    constructor(private http: HttpClient) { }


    searchext(text: string) {
        console.log(text);
       // return this.http.get(`${environment.apiUrl}/search/text/${text}`).pipe(
       //     catchError(this.errorHandler)
       //   );

       return this.http.get(`${environment.apiUrl}/search/text/${text}`).pipe(
        map(response => {
            return response;
        })).pipe(
                 catchError(this.errorHandler)
             );
    }


    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
      }


      getDataWithObservable(type: string,text: string) : Observable<any>{
          return this.http.get(`${environment.apiUrl}/search/text/${text}`)
                .pipe(
                  map(this.extractData),
                  catchError(this.handleErrorObservable)
                );
      }
    
        private extractData(res: Response) 
        {
           // let body = res.json();  
           let body = res;    
            console.log('extractData');
            return body;
        }
    
        private handleErrorObservable (error: Response | any) 
        {   
           // return Observable.throw(error.message || error);
           console.log('handleErrorObservable');
           console.log(error);
            return throwError(error.message || error);
        }
} 