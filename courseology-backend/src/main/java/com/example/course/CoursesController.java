package com.example.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CoursesController {
    @Autowired
    CoursesService coursesService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(CourseNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE
    @PostMapping("/course")
    public ResponseEntity<String> createCourse(@RequestBody Course course){
        coursesService.createCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body("Created course");
    }

    // READ
    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getCourses() {
        return ResponseEntity.status(HttpStatus.OK).body(coursesService.getAllCourses());
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(coursesService.getCourseById(id));
    }

    // UPDATE
    @PutMapping("/course/{id}")
    public ResponseEntity<Course> updateGreeting(@RequestBody Course newCourse, @PathVariable long id) {
        newCourse.setId(id);
        coursesService.updateCourse(newCourse, id);
        return ResponseEntity.status(HttpStatus.OK).body(newCourse);
    }

    // DELETE
    @DeleteMapping("/course/{id}")
    public ResponseEntity<Void> deleteGreetingById(@PathVariable long id) {
        coursesService.deleteCourseById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
