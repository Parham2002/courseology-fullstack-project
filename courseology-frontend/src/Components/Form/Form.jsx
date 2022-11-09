import "./Form.scss"
import { useState } from "react"
import { useEffect } from "react";

const Form = ({ defaultFormState, handleSubmit, formTitle}) => {
    const [course, setCourse] = useState(defaultFormState);
    const previousInfo = defaultFormState;

    const handleValidation = event => {
        event.preventDefault();
    
        if (Object.values(course).some(value => !value)) {
          alert("Missing content, unable to proceed");
          return;
        }
    
        handleSubmit(course);
      };

  return (
    <div className='form-container'>
        <h2>{formTitle}</h2>
        <form className='form-container__form' onSubmit={handleValidation}>
            <div className="form-container__item form-container__item--1">
                <p>Course Name</p>
                <input type="text" value={course.courseName} placeholder={previousInfo.courseName} onInput={event => setCourse({ ...course, courseName: event.target.value })}/>
            </div>
            <div className="form-container__item form-container__item--2">
                <p>Course Author</p>
                <input type="text" value={course.author} placeholder={previousInfo.author} onInput={event => setCourse({ ...course, author: event.target.value })} />
            </div>
            <div className="form-container__item form-container__item--3">            
                <p>Course Image URL</p>
                <input type="text" value={course.imageURL} placeholder={previousInfo.imageURL} onInput={event => setCourse({ ...course, imageURL: event.target.value })} />
            </div>
            <div className="form-container__item form-container__item--4">
                <p>Course Category</p>
                <input type="text"  value={course.category} placeholder={previousInfo.category} onInput={event => setCourse({ ...course, category: event.target.value })} />
            </div>
            <div className="form-container__item form-container__item--5">            
                <p>Course Price</p>
                <input type="text" value={course.price} placeholder={previousInfo.price} onInput={event => setCourse({ ...course, price: event.target.value })} />
            </div>
            <div className="form-container__item form-container__item--6">
                <p>Course Completion Time</p>
                <input type="text" value={course.completionTime} placeholder={previousInfo.completionTime} onInput={event => setCourse({ ...course, completionTime: event.target.value })} />
            </div>
            <div className="form-container__item form-container__item--7">
                <p>Course Description</p>
                <textarea cols="3" rows="4" value={course.description} placeholder={previousInfo.description} onInput={event => setCourse({ ...course, description: event.target.value })} ></textarea>
            </div>
            <button className="form-container__button" type="submit">
                Submit Course
            </button>
        </form>
    </div>
  )
}

export default Form