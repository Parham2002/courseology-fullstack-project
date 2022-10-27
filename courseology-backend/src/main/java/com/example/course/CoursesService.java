package com.example.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CoursesService {

    @Autowired
    CoursesRepository coursesRepository;

    // CREATE
    public void createCourse(Course course) {
        coursesRepository.save(course);
    }

    // READ
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

    // UPDATE
    public void updateCourse(Course newCourse, long id) {
        if (!coursesRepository.existsById(id)) {
            throw new CourseNotFoundException();
        }

        newCourse.setId(id);

        coursesRepository.save(newCourse);
    }

    // DELETE
    @Transactional
    public void deleteCourseById(long id) {
        if (!coursesRepository.existsById(id)) {
            throw new CourseNotFoundException();
        }

        coursesRepository.deleteCourseById(id);
    }
}
