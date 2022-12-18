package com.ps.demo.Entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name="worker")
@Data//a lombok annotation that automatically generate the getters and setters for you behind the scenes
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private WorkerCategory category;

    @Column(name = "Name")
    private String Name;

    @Column(name = "Domain")
    private String Domain;

    @Column(name = "description")
    private String description;

    @Column(name = "dayly_price")
    private BigDecimal dayly_price;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "fcb_url")
    private String fcbUrl;

    @Column(name = "Number")
    private int Number;

    @Column(name = "date_available")
    @CreationTimestamp
    private Date dateAvailable;
}






