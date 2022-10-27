package com.example.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CoursesService {

    @Autowired
    CoursesRepository coursesRepository;

    public void createCourse(Course course) {
        coursesRepository.save(course);
    }

    public Course getCourseById(long id) {
        Optional<Course> course = coursesRepository.findById(id);

        if (course.isEmpty()) {
            throw new CourseNotFoundException();
        }

        return course.get();
    }

    public List<Course> getAllCourses() {
        return coursesRepository
                .findAll()
                .stream()
                .collect(Collectors.toList());
    }

}
