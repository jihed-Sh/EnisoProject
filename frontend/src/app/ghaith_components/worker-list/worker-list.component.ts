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
  searchMode!: boolean;

  constructor(private workerService: WorkerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listWorkers();
    });
  }

  listWorkers() {

    this.searchMode= this.route.snapshot.paramMap.has('keyword');
    console.log("search mode is " + `${this.searchMode}`);

    if (this.searchMode){

      this.handleSearchWorkers();
    }
    else if(this.searchMode==false){
      this.handleListWorkers();
    }
   
    
  }
  
  handleSearchWorkers(){
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // new search for the workers using keyword
    this.workerService.searchWorkers(theKeyword).subscribe(
      data => {
        
        this.workers= data ;
      }
    );

  }

  handleListWorkers(){
    
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
  doSend(value: string){
    console.log(`value=${value}`);
    // -- To Do -- a function that sends an email to the worker
      var link = `${value}`
                 + "?cc=ghaithmeftah@gmail.com"
                 + "&subject=" + escape("This is my subject")
                 + "&body=" + escape("I have some work for you")
      ;
      window.location.href = link;
    
  }
}

