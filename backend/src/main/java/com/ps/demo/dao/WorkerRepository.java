package com.ps.demo.dao;


import com.ps.demo.Entity.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface WorkerRepository extends JpaRepository<Worker,Long> {

}
