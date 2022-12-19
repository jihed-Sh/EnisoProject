import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Worker } from '../common/worker'

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private baseUrl = 'http://localhost:8080/api/workers';

  constructor( private httpClient: HttpClient) { }

  getWorkerList(theCategoryId: number):Observable<Worker[]> {
   //need to build URL based on category id 
   const seachUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`

    //returns an observable Map the JSON data from the Spring Data REST to Worker array 
    return this.httpClient.get<GetResponse>(seachUrl).pipe(
      map(response  => response._embedded.workers)
      );
  }
}

//Unwrap the JSON from Spring Data REST _embedded entry
interface GetResponse {
  _embedded: {
    workers: Worker[];
  }
}
