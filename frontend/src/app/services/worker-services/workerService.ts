import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Worker} from "../../model/worker/worker";

@Injectable()
export class WorkerService {
    private readonly apiUrl = 'http://localhost:8080'

    constructor(private http: HttpClient) {
    }

    findWorkers(): Observable<Worker[]> {
        return this.http.get<Worker[]>('http://localhost:8080/worker/find')
    }

    findWorkersByWorkType(): Observable<Worker[]> {
        return this.http.get<Worker[]>(this.apiUrl + '/worker/find-by-type')
    }

    getWorker(id:String): Observable<Worker> {
        return this.http.get<Worker>(this.apiUrl + '/worker/profile/'+id)
    }

    saveWorker(worker:Worker): Observable<Worker> {
        return this.http.post<Worker>(this.apiUrl + '/worker/save-worker',worker)
    }

    updateWorker(worker:Worker): Observable<Worker> {
        return this.http.put<Worker>(this.apiUrl + '/worker/update-worker',worker)
    }

    deleteWorker(id:String): Observable<boolean> {
        return this.http.delete<boolean>(this.apiUrl + '/worker/delete-worker/'+id)
    }

}
