import React, { useState } from 'react'
import Card from './Card'

export default function Cards(props) {

  let courseData = props.courseData;
  let category = props.category;
  //course liked or not
  const [likedCourses, setLikedCourses] = useState([])
  
  // we want all element in single arrray
  function getCourse(){
    // filter coourses
    if(category === "All"){
       // we create a single array
    let allCourse = [];
    // here we conver all element in single array
    Object.values(courseData).forEach(array => {
      // here we can access all element in single array
      array.forEach(courses => {
        // now we push all single element in newly created array which is 'allCourse'
        allCourse.push(courses);
      })
    })
    return allCourse;
    }
    else{
      // show spacific category which was clicked 
      return courseData[category];
    }
  }

  return (
    <>
    {/* for show the all course data we use map func
        now we pass the course as a props in card component  */}
      <div className='flex flex-wrap justify-center gap-4 mb-4 mt-[30px]'>
        {
          getCourse().map((course) => (
            <Card key={course.id} 
            course = {course}
            likedCourses = {likedCourses}
            setLikedCourses = {setLikedCourses}
            />
          ))
        }
      </div>
     
    </>
  )
}
