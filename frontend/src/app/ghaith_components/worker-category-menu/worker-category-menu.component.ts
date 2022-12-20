import { Component, OnInit } from '@angular/core';
import { WorkerCategory } from 'src/app/common/worker-category';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-category-menu',
  templateUrl: './worker-category-menu.component.html',
  styleUrls: ['./worker-category-menu.component.scss']
})
export class WorkerCategoryMenuComponent implements OnInit {

  workerCategories!: WorkerCategory[];

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
    this.listWorkerCategories();
  }
  listWorkerCategories() {
    
    //invoke the service
    this.workerService.getWorkerCategories().subscribe(
      data => {
        //log data returned from the service
        console.log('worker Categories=' + JSON.stringify(data));
        this.workerCategories = data;
      }
    );
  }

}
