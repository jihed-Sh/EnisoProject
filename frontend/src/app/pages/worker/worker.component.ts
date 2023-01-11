import {Component, OnInit} from '@angular/core';
import {WorkerService} from "../../services/worker-services/workerService";
import {Worker} from "../../model/worker/worker";

@Component({
    selector: 'app-worker',
    templateUrl: './worker.component.html',
    styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {
    available: boolean = true;
    worker!: Worker;
    listW!:Worker[];


    constructor(public workerService: WorkerService) {
    }

    ngOnInit(): void {
        this.workerService.getWorker("WElonWMusk").subscribe(
            {
                next: (data) => {
                    this.worker=data;
                    console.log(this.worker);
                }, error: err => {
                    console.log(err)
                }

            }
        )
    }

}
