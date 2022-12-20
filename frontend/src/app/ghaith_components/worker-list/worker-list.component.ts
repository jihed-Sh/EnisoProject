import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from 'src/app/services/worker.service';
import { Worker } from '../../common/worker'

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})

export class WorkerListComponent implements OnInit {

  workers!: Worker[];
  currentCategoryId!: number;
  constructor(private workerService: WorkerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listWorkers();
    });
  }

  listWorkers() {


    //check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId){
      //get the "id" param string, convert string to a number using the '+' symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }else{
      //not category id available ... default to category id 1 
      this.currentCategoryId = 1;
    }
    //now get the workers for the given category id
    this.workerService.getWorkerList(this.currentCategoryId).subscribe(
      data => {
        //assign results to the Worker array
        this.workers = data;
      }
    )
  }

}
