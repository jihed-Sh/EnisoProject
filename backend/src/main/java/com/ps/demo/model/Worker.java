package com.ps.demo.model;

import com.ps.demo.enums.WorkTypes;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Worker {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String email;
    private int age;
    private String location;
    private LocalDateTime birthdate;
    private WorkTypes workTypes;
    private String imageUrl;
    private String description;
//    private Job occupation;
//    private List<Job> jobsHistory;
//    private List<Project> projectCatalogue;
//    private List<Languages> languages;
//    private List<Education> education;
//    private List<String> skills;
//    private List<Job> savedJobs;
}
