import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Worker } from '../common/worker'
import { WorkerCategory } from '../common/worker-category';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  
  

  private baseUrl = 'http://localhost:8080/api/workers';

  private categoryUrl = 'http://localhost:8080/api/worker-category'

  constructor( private httpClient: HttpClient) { }

  getWorkerList(theCategoryId: number):Observable<Worker[]> {
   //need to build URL based on category id 
   const seachUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`

    //returns an observable Map the JSON data from the Spring Data REST to Worker array 
    return this.getWorkers(seachUrl);
  }

  private getWorkers(seachUrl: string): Observable<Worker[]> {
    return this.httpClient.get<GetResponseWorkers>(seachUrl).pipe(
      map(response => response._embedded.workers)
    );
  }

  searchWorkers(theKeyword: string):Observable<Worker[]>  {
    //need to build URL based on keyword 
  const seachUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`

  //returns an observable Map the JSON data from the Spring Data REST to Worker array 
  return this.getWorkers(seachUrl);
   
 }
  
  getWorkerCategories(): Observable<WorkerCategory[]> {
    //call REST api
    //Returns an Observale and Maps the JSON data from spring data REST
    //to ProductCategory array
    return this.httpClient.get<GetResponseWorkerCategory>(this.categoryUrl).pipe(
      map(response  => response._embedded.WorkerCategory)
      );
  }

  

}

//Unwrap the JSON from Spring Data REST _embedded entry
interface GetResponseWorkers {
  _embedded: {
    workers: Worker[];
  }
}


//Unwrap the JSON from Spring Data REST _embedded entry
interface GetResponseWorkerCategory {
  _embedded: {
    WorkerCategory: WorkerCategory[];
  }
}
