package com.ps.demo.service.implementation;

import com.ps.demo.enums.WorkTypes;
import com.ps.demo.model.Worker;
import com.ps.demo.repo.WorkerRepo;
import com.ps.demo.service.WorkerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
public class WorkerServiceImpl implements WorkerService {
    private final WorkerRepo workerRepo;


    @Override
    public Worker createWorker(Worker worker) {
        worker.setId(generateId(worker.getFirstName(),worker.getLastName()));
       // worker.setImageUrl(setWorkerImageUrl());
        return workerRepo.save(worker);
    }

    @Override
    public Worker updateWorker(Worker worker) {
        return workerRepo.save(worker);
    }

    @Override
    public List<Worker> findWorkers() {
        return workerRepo.findAll();
    }

    @Override
    public List<Worker> findWorkersByWorkType(WorkTypes workTypes) {
        return workerRepo.findWorkerByWorkTypes(workTypes);
    }

    @Override
    public Worker getWorker(String id) {
        return workerRepo.findById(id).get();
    }

    @Override
    public boolean deleteWorker(String id) {
        workerRepo.deleteById(id);
        return true;
    }


    private String generateId(String firstName,String lastName) {
        return 'W' + firstName + 'W' + lastName;
    }

    private String setWorkerImageUrl() {
        return null;
    }

}
