package com.example.course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoursesRepository extends JpaRepository<Course, Long> {

    @Query(value="SELECT DISTINCT id FROM Course", nativeQuery = true)
    List<Long> getDistinctIds();

    @Query(value="SELECT * FROM course", nativeQuery = true)
    List<Course> getAllCourses();

    void deleteCourseById(long id);
}
