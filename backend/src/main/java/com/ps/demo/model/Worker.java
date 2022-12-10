package com.ps.demo.model;

import com.ps.demo.enums.UserTypes;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;
import java.util.List;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Worker {
        @Id
        @GeneratedValue(strategy = AUTO)
        private String id;
        private String firstName;
        private String lastName;
        @Column(unique = true)
        private String email;
        private int Age;
        private String location;
        private Date birthdate;
        private UserTypes type;
        private String imageUrl;
        private  String description;
//        private List<Job> jobsHistory;
//        private Job occupation;
//        private List<Project> projectCatalogue;
//        private List<Languages> languages;
//        private List<Education> education;
//        private  List<String> skills;
//        private  List<Job> savedJobs;
}
