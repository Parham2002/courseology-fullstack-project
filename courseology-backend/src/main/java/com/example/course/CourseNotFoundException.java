package com.example.course;

public class CourseNotFoundException extends RuntimeException {
    public CourseNotFoundException() {
        super("Course has not been found");
    }
}
