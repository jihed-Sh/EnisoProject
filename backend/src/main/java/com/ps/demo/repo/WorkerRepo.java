package com.ps.demo.repo;

import com.ps.demo.enums.WorkTypes;
import com.ps.demo.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WorkerRepo extends JpaRepository<Worker,String> {
    List<Worker> findWorkerByWorkTypes(WorkTypes workType);
}
