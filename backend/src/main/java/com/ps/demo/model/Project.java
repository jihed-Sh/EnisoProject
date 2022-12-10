package com.ps.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

import static javax.persistence.GenerationType.AUTO;

@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = AUTO)
    private String id;
    private String title;
    private String description;
    private String period;
    }
