import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';

export default function Card(props) {

  let course = props.course
  let likedCourses = props.likedCourses
  let setLikedCourses = props.setLikedCourses

  function clickHandler() {
    //course liked or not
    // check any current course.id are present in under the liked course
    if(likedCourses.includes(course.id)){
      //if present it means course already liked 
      // now we need to remove like (UNLIKE)
      setLikedCourses((prev) => prev.filter((cid)=> (cid !== course.id)))
      toast.warning("Like Remove");
    }
    else{
      // if coueses aare not liked
      // insert the course in liked course (LIKED)
      if(likedCourses.length === 0){
        setLikedCourses([course.id])
      }
      else{
        // if courses are liked
        setLikedCourses((prev) => [...prev, course.id])
      }
      toast.success("Liked")
    } 
  }

  return (
    <>
    <div className='card_data w-[300px] rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} />

      <div className=' absolute w-[40px] h-[40px] rounded-full bg-[#4fbd69] grid place-items-center right-2 bottom-[-12px]'>
        <button onClick={clickHandler}>
          {
            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
          }
        </button>        
      </div>

      </div>

      <div className=' p-4'>
        <p className=' font-tajawal font-semibold text-[18px] text-[#7ed993] leading-7'> {course.title} </p>
        <p className=' mt-2 text-[#d8d8d8]'>
          {
            course.description.length>100 ? (course.description.substr(0,100) + "...") : (course.description)
          }
        </p>
        <strong> <a href="google.com" target = "_blank" 
rel = "noopener noreferrer">Access Course</a></strong>
      </div>  

    </div>
     
    </>
  )
}
