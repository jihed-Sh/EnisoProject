package com.ps.demo.service;

import com.ps.demo.enums.WorkTypes;
import com.ps.demo.model.Worker;

import java.util.Collections;
import java.util.List;

public interface WorkerService {
    Worker createWorker(Worker worker);
    Worker updateWorker(Worker worker);
    List<Worker> findWorkers();
    List<Worker> findWorkersByWorkType(WorkTypes workTypes);
    Worker getWorker(String id );
    boolean deleteWorker(String id);

}
