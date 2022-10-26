package com.example.course;

import javax.persistence.Entity;
import java.time.LocalDate;

@Entity
public class Course {

    private long id;
    private String course;
    private LocalDate dateCreated = LocalDate.now();

    public Course(long id, String course, LocalDate dateCreated) {
        this.id = id;
        this.course = course;
        this.dateCreated = dateCreated;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public LocalDate getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
    }
}
