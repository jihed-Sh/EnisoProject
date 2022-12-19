package com.ps.demo.dao;


import com.ps.demo.Entity.Worker;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

//accept calls from the web browser scripts for this origin
/*origin is more than just the hostname ,Origin is (protocol + hostname + port ) it is nessesary that you work on the same origin (http://localhost:4200 != http://localhost:8080)*/
@CrossOrigin("http://localhost:4200")
public interface WorkerRepository extends JpaRepository<Worker,Long> {

    //Behind the scenes ,Spring will execute a query similar to this
    // (SELECT * FROM worker where categoru_id=?
    //http://localhost:8080/api/workers/search/findByCategoryId?id=1
    Page<Worker> findByCategoryId(@RequestParam("id") long id, Pageable pageable);

}
