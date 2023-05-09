import { useEffect, useState } from "react";
import Filter from "./components/Layout/Filter";
import Navbar from "./components/Layout/Navbar";
import Cards from "./components/pages/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spiner from "./components/pages/Spiner";


function App() {

  const [courseData, setCourseData] = useState(null) // show data
  const [loading, setLoading] = useState(true) // show loading screen before the showing the data
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    // show loading
    setLoading(true);
    // show data
    try{
      // fetch the data
      let response = await fetch(apiUrl);
      // convert fecthing data into the json format 
      let output = await response.json()
      // show the all data which are available in the output 
      // so we need to create a state in the above
      setCourseData(output.data);
    }
    catch(error){
      toast.error("Network Error");
    }
    setLoading(false)
  }

  // call the fetchData we use useEffect
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
    <div className=" w-full h-screen flex flex-col items-center overflow-x-hidden bg ">
    <div className=" w-full">
        <Navbar/>
      </div>

      <div>
        <div>
          <Filter filterData = {filterData} 
                  category = {category}
                  setCategory = {setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] flex flex-wrap mx-auto justify-center items-center min-h-[50vh]">
          {/* here we show the all Cards, but it toatally depends on the loading screen
          if the loading true we show spiner components or we show Cards
          pass all courseData As a props in card component */}
          {
            loading ? ( <Spiner/> ) : ( <Cards courseData = {courseData} category = {category}/> )
          }
        </div>
      </div>
      <footer> © {new Date().getFullYear()} Top Courses. Developed By <a href="https://sosamson.com" target = "_blank" 
rel = "noopener noreferrer">Sosamson</a>. All rights reserved.</footer>
    </div>
    
    </>
  );
}

export default App;
