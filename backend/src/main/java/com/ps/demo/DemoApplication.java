package com.ps.demo;

import com.ps.demo.enums.WorkTypes;
import com.ps.demo.model.Worker;
import com.ps.demo.repo.WorkerRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDateTime;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200")
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	@Bean
	CommandLineRunner run(WorkerRepo workerRepo){
		return args -> {
			workerRepo.save(new Worker("cd","Jihed","Ben Zarb","email",21,"Tunisia",
					LocalDateTime.of(2000,5,28,12,2),
					WorkTypes.BUILDING,"jhfv","very talented engineer"));
			workerRepo.save(new Worker("lol","Hsan","Sandid","email1",50,"Africa",
					LocalDateTime.of(2000,5,28,12,2),
					WorkTypes.MECHANIC,"jhfv","CEO of good companies"));
			workerRepo.save(new Worker("no","Tayssir","Ghanmi","email2",20,"Benzart",
					LocalDateTime.of(2000,5,28,12,2),
					WorkTypes.ELECTRICITY,"jhfv","very smart engineer"));
			workerRepo.save(new Worker("WElonWMusk","Elon","Musk","email4"
					,40,"Silicon Vally,USA",
					LocalDateTime.of(2000,5,28,12,2),
					WorkTypes.BUILDING,"jhfv","A hard working builder who build amazing things all over the country and aboard"));
		};
	}

}
