package com.ps.demo.resources;

import com.ps.demo.enums.WorkTypes;
import com.ps.demo.model.Worker;
import com.ps.demo.service.implementation.WorkerServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/worker")
@RequiredArgsConstructor
public class WorkerController {
    private  final WorkerServiceImpl workerService;
    @GetMapping("/find")
    public List<Worker> findWorkers(){
        return workerService.findWorkers();
    }
    @GetMapping("/find-by-type")
    public List<Worker> findWorkersByWorkType(@RequestBody WorkTypes workType){
        return workerService.findWorkersByWorkType(workType);
    }
    @GetMapping("/profile/{id}")
    public Worker getWorker(@PathVariable String id){
        return workerService.getWorker(id);
    }
    @PostMapping("/save-worker")
    public Worker saveWorker(@RequestBody Worker worker){
        return workerService.createWorker(worker);
    }
    @PutMapping("/update-worker")
    public Worker updateWorker(@RequestBody Worker worker){
        return workerService.updateWorker(worker);
    }
    @DeleteMapping("/delete-worker/{id}")
    public boolean deleteWorker(@PathVariable String id){
        return workerService.deleteWorker(id);
    }
//    @GetMapping(path="/image/{filename}",produces = IMAGE_PNG_VALUE)
//    public byte[] getWorkerImageUrl(@PathVariable String filename){
//            return
//    }



}
